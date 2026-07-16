import Navbar from "@/components/Navbar"
import styles from "./page.module.css"

export default function About() {
    return (
        <>
        <div className="folder">
            <Navbar />
            <div className={styles.about}>
                <h1>About Me</h1>
                <h2>who I am</h2>
                <p>Hello! I'm currently a third-year student at the University of Waikato studying Bachelor of Computer Science.</p>
                <br/>
                <p>I got into web development thanks to high school me stumbling upon the world of customizable Tumblr themes. Since then, 
                    my love for it continues to grow, and the aspect of learning new things to make web development easier not just for myself, 
                    but for others is something that I've become interested in along the way. Whether that's translating their designs into code, 
                    or helping their ideas become designs.</p>
                <br/>
                <p>I like cute things, this portfolio is a testament of that and although it's not your typical portfolio, I hope you can still 
                    take the time to go through it and learn more about me.</p>
                <br/>
                <p>Outside of coding I love to knit, bake, build Gunpla — anything that keeps my hands busy and my mind thinking.</p>
                <br/>
                <h2>skills</h2>
                <h3>comfortable with</h3>
                <div className={styles.logos}>
                    <img src="/icons/html-logo.webp" />
                    <img src="/icons/css-logo.webp" />
                    <img src="/icons/javascript-logo.webp" />
                    <img src="/icons/react-logo.webp" />
                    <img src="/icons/next-logo.webp" />
                    <img src="/icons/figma-logo.webp" />
                </div>
                <h3>exposure to</h3>
                <p>Java | C# | Android Studio</p>
            </div>
        </div>
        </>
    )
}