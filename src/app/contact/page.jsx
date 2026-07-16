"use client"
import { useState } from "react"
import { useRef } from "react"
import Navbar from "@/components/Navbar"
import styles from "./page.module.css"

export default function Contact() {
    const [emailData, setEmailData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const dialogRef = useRef(null)

    const [status, setStatus] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        //Validating data
        if(!emailData.name.trim()) {
            setErrorMessage("Please enter your name.")
            dialogRef.current.showModal()
            return
        }
        if(!emailData.email.trim() || !emailData.email.includes("@")) {
            setErrorMessage("Please enter a valid email.")
            dialogRef.current.showModal()
            return
        }
        if(!emailData.message.trim()) {
            setErrorMessage("Please write your message.")
            dialogRef.current.showModal()
            return
        }

        setStatus("sending")

        const result = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emailData)
        })

        if (result.ok) {
            setEmailData({ name: "", email: "", message: "" })
            setStatus("")
        } else {
            setErrorMessage("Something went wrong, please try again.")
            dialogRef.current.showModal()
        }
    }
    return (
        <>
        <div className="folder">
            <Navbar />
            <div className={styles.contact}>
                <div className={styles.postcard}>
                    <div className={styles.title}>
                        <h1>Contact Me</h1>
                        <div className={styles.stamps}>
                            <a href="https://www.linkedin.com/in/ammi-ruth-camia" target="_blank" rel="noopener noreferrer">
                                <img src="/stamps/linkedin-stamp.webp" />
                            </a>
                            <a href="https://github.com/ammicamia" target="_blank" rel="noopener noreferrer">
                                <img src="/stamps/github-stamp.webp" />
                            </a>
                            <a href="/Ammi_Camia_CV.pdf" download>
                                <img src="/stamps/cv-stamp.webp" />
                            </a>
                        </div>
                    </div>
                    
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formContent}>
                            <div className={styles.address}>
                                <label>Name: <input id="name" type="text" maxLength={100} value={emailData.name} onChange={(e) => setEmailData({...emailData, name: e.target.value})} required/></label>
                                <label>Email: <input id="email" type="email" maxLength={254} value={emailData.email} onChange={(e) => setEmailData({...emailData, email: e.target.value})} required/></label>
                            </div>
                            <div className={styles.message}>
                                <textarea id="message" maxLength={1000} placeholder="Write your message here..." value={emailData.message} onChange={(e) => setEmailData({...emailData, message: e.target.value})} required/>
                            </div>
                        </div>
                        <button className={styles.submitBtn} type="submit" disabled={status === "sending"}>{ status === "sending" ? "sending..." : "send it" }</button>
                    </form>
                    <dialog ref={dialogRef} className={styles.dialog}>
                        <p>{errorMessage}</p>
                        <button onClick={() => dialogRef.current.close()}>ok</button>
                    </dialog>
                </div>
            </div>
        </div>
        </>
    )
}