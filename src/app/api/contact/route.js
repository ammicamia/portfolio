import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

//Rate limiting
const attempts = new Map()

export async function POST(request) {
    const ip = request.headers.get("x-forwarded-for") || "unknown"
    const now = Date.now()
    const windowMs = 60 * 1000
    const max = 3

    const timestamps = (attempts.get(ip) || []).filter(t => now - t < windowMs)

    if (timestamps.length >= max) {
        return Response.json({ error: "Too many requests" }, { status: 429 })
    }

    attempts.set(ip, [...timestamps, now])

    //Get details
    console.log("route hit")
    const { name, email, message } = await request.json()
    
    //Sanitize inputs
    const sanitize = (str) => str.replace(/<[^>]*>/g, "").trim()
    const cleanName = sanitize(name)
    const cleanEmail = sanitize(email)
    const cleanMessage = sanitize(message)

    //Check max length
    if (cleanName.length > 100 || cleanEmail.length > 254 || cleanMessage.length > 1000) {
        return Response.json({ error: "Input too long" }, { status: 400 })
    }

    try {
        const data = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "camiammiruth@gmail.com",
            replyTo: email,
            subject: `New message from ${name}`,
            html: `<p>${message}</p>`
        })
        console.log("resend response", data)
        return Response.json({ success: true })
    } catch (error) {
        console.log("resend error", error)
        return Response.json({ error: "Failed to send" }, { status: 500 })
    }
}