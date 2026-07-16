"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
    const pathName = usePathname()

    const tabs = [
        { label: "home", href: "/", color: "#F1D592" },
        { label: "about", href: "/about", color: "#8FAF7E" },
        { label: "projects", href: "/projects", color: "#7E9BAF" },
        { label: "contact", href: "/contact", color: "#AF7E8F" },
        { label: "", href: "/easter", color: "#F1D592"}
    ]

    return (
        <nav className={styles.nav}>
            {tabs.map(tab => (
                <Link key={tab.href}
                href={tab.href}
                className={styles.tab}
                style={{ backgroundColor: tab.color }}
                aria-current={pathName === tab.href ? "page" : undefined}>
                    {tab.label}
                </Link>
            ))}
        </nav>
    )
}