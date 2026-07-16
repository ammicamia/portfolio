"use client"
import { useEffect, useRef } from "react"
import styles from "./Bear.module.css"

export default function Bear() {
    const pupilRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            if(!pupilRef.current) return

            const rect = pupilRef.current.getBoundingClientRect()
            const eyeX = rect.left + rect.width / 2
            const eyeY = rect.top + rect.height / 2

            const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX)
            const offset = 2
            pupilRef.current.style.transform = `translate(${Math.cos(angle) * offset}px, ${Math.sin(angle) * offset}px)`
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className={styles.bear}>
            <img src="/bear.webp" className={styles.body}/>
            <img src="/bear-eyes.webp" ref={pupilRef} className={styles.eyes}/>
        </div>
    )
}