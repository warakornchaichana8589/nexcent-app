"use client"
import Image from 'next/image';
import Link from 'next/link';
import styles from './FooterDesign.module.css'
export default function FooterDesign() {
  return (
    <section className={styles.sectionPixel}>
            <div className={`container ${styles.conSection}`}>
            <div className={styles.layoutHero}>
                <div className={styles.boxImage}>
                    <Image src="/images/how-to-sec.png" alt="iamge hero" width={391} height={407} className={`floatY ${styles.imageHero}`} />
                </div>
                <div className={styles.boxContentHero}>
                    <h2 className={styles.h1Hero}>How to design your site footer like we did
                       </h2>
                    <p className={`my-4 ${styles.heroDescription}`}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <Link href="/" className={styles.btnRegister}>Learn More</Link>
                </div>

            </div>
        </div>
        </section>
  );
}