import Navbar from "@/components/Navbar"
import Receipt from "@/components/Receipt"
import styles from "./page.module.css"

export default function Projects() {
    return (
        <div className="folder">
            <Navbar />
            <div className={styles.projects}>
                <h1>Projects</h1>
                <div className={styles.receipts}>
                    <Receipt number="001" title="PURRBIT" description="A tamagotchi-style game for Chrome extensions, but cats. This was created for a cat-themed hackathon." stack={["HTML", "CSS", "JavaScript"]} github="https://github.com/kesauce/purrbit" />
                </div>
            </div>
        </div>
    )
}