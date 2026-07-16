import Navbar from "@/components/Navbar"
import Sticker from "@/components/Sticker"
import Bear from "@/components/Bear"
import styles from "./page.module.css"

export default function Home() {
    return (
        <>
        <div className="folder">
          <Navbar />
          <div className={styles.home}>
            <div className={styles.mainContent}>
              <div className={styles.header}>
                <h1>Hi, I'm Ammi!</h1>
                <p>CS student with a design problem.</p>
              </div>

              <div className={styles.photo}>
                <img src="/my-photo.webp" alt="Image of me"></img>
                <p className={styles.caption}>that's me!</p>
              </div>
            </div>

            <Sticker src="/stickers/paw-sticker.webp" text="i'm a huge cat lover" className={styles.pawSticker} />
            <Sticker src="/stickers/knitting-sticker.webp" text="currently have three knitting projects at the same time" className={styles.knitSticker} />
            <Sticker src="/stickers/baking-sticker.webp" text="i love baking new things during my free time" className={styles.cakeSticker} />
            
            <p className={styles.hint}>[the good stuff is in the tabs]</p>
            <Bear className={styles.bear}/>
          </div>
          
        </div>
        </>
    )
}