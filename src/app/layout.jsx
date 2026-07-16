import "./global.css"
import { Darumadrop_One, Lexend } from 'next/font/google'

const darumadropOne = Darumadrop_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-darumadrop-one",
})

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-lexend",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${darumadropOne.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  )
}