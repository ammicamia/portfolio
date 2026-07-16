import styles from "./Sticker.module.css"

export default function Sticker({ src, text, className }) {
    return (
        <div className={`${styles.sticker} ${className}`}>
            <img src={src}/>
            <span className={styles.popup}>{text}</span>
        </div>
    )
}