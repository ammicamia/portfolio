import styles from "./Receipt.module.css"

export default function Receipt({ number, title, description, stack, site, github }) {
    return (
        <div className={styles.receipt}>
            <div className={styles.content}>
                <hr/>
                <div className={styles.header}>
                    <p>{title}</p>
                    <p>{number}</p>
                </div>
                <hr/>
                <div className={styles.stack}>
                    {stack.map(tech => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
                <hr/>
                <div className={styles.links}>
                    {/* Only applies links if they've been passed in */}
                    {site && <a href={site} target="_blank" rel="noopener noreferrer">Live ↗</a>}
                    {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub/Documentation ↗</a>}
                </div>
                <hr/>
                <p className={styles.description}>{description}</p>
                <hr/>
            </div>
        </div>
    )
}