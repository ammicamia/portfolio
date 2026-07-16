import Navbar from "@/components/Navbar"
import styles from "./page.module.css"

export default function Easter() {
    return (
        <div className="folder">
            <Navbar />
            <div className={styles.easter}>
                <h2>you found it. here's some cats.</h2>
                <div className={styles.gallery}>
                    <div className={styles.photo}>
                        <img src="/cats/krinkles.webp" />
                        <p className={styles.caption}>krinkles</p>
                    </div>
                    <div className={styles.photo}>
                        <img src="/cats/panito.webp" />
                        <p className={styles.caption}>panito</p>
                    </div>
                    <div className={styles.photo}>
                        <img src="/cats/persi.webp" />
                        <p className={styles.caption}>persi (short for persimmon)</p>
                    </div>
                    <div className={styles.photo}>
                        <img src="/cats/petunia.webp" />
                        <p className={styles.caption}>petunia</p>
                    </div>
                    <div className={styles.photo}>
                        <img src="/cats/pickles.webp" />
                        <p className={styles.caption}>pickles</p>
                    </div>
                    <div className={styles.photo}>
                        <img src="/cats/potchi.webp" />
                        <p className={styles.caption}>potchi</p>
                    </div>
                    <div className={styles.photo}>
                        <img src="/cats/pumpkin.webp" />
                        <p className={styles.caption}>pumpkin</p>
                    </div>
                    <div className={styles.photo}>
                        <img src="/cats/pepper.webp" />
                        <p className={styles.caption}>pepper</p>
                    </div>
                </div>
            </div>
        </div>
    )
}