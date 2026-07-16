# Portfolio

My personal portfolio website, designed and built from scratch.

🔗 [ammi-camia.vercel.app](https://ammi-camia.vercel.app)

## Built With
- Next.js
- React
- CSS Modules
- Resend

## Process
### Starting Out
Originally, I didn't know what to do. I just wanted a place to put my projects but it felt like anything I designed wasn't what I wanted. So, I started thinking about what would actually feel like <i>me</i>.

The folder concept came out of nowher, I had my folder sitting on my desk when I started brainstorming in my head — the tabs would be the sections and the cover was the front. I genuinely felt excited to make it, and that's when I knew that I found what I wanted my portfolio to be based off of.

### Design Proces
I designed the concept in Figma first, working out the folder proportions, tab layout, and colour palette before touching any code. Since I didn't have a dark mode I wanted the colours to be neutral and not too painful on the eyes — so I opted for muted colours.

All illustrations where hand drawn in Ibis Paint X. The bear mascot (based off of my actual bear stuffie) was drawn using a cloud paint brush style while the stickers, skill icons, and stamps were all drawn using a crayon style. The bear's pupils were exported separately from the head so they can be animated independently using cursor tracking in JavaScript.

The stickers at the front are a personal touch — each one reveals a little something about me without taking away from the main point of the portfolio.

## Technical Architecture
The portfolio is built with Next.js and deployed on Vercel. Routing uses Next's file-based App Router — each folder tab maps to a page route, with usePathname driving the active tab state via aria-current rather than managing it manually with useState.

CSS Modules were used throughout to keep styles scoped and avoid conflicts, with CSS variables for fonts and mobile-first responsive layout that shifts the folder from landscape on desktop to portrait mode on mobile, repositioning the tabs to the side using flexbox order.

The contact form uses Resend for email delivery, with server-side input sanitization, max length valdiation, and a simple IP-based rate limiter to prevent abuse — all handled in a Next.js API route.

## Personal Touches
The portfolio was always going to have a bit of personality — and this concept naturally lent itself to a scrapbook aesthetic, so I leaned into it.

Stickers are placed randomly on the cover, each one hand drawn and tied to something I actually do outside of coding — a ball of yarn for knitting, a cake for baking. Hovering over them shows a small tooltip, like peeking a sticky note someone left on a folder.

The bear mascot in the corner of the home page watches your cursor — his pupils track wherever your mouse goes. It's a small detail most people probably won't notice, but knowing that this bear is a small part of my childhood and is still watching over me might make them smile.

There's also a chance for you to meet my cats — but that's up to you to find out how.
