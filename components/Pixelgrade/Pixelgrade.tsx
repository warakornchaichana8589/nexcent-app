"use client"
import styles from './Pixelgrade.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Pixelgrade() {
    return (
        <section className={styles.sectionPixel}>
            <div className={`container ${styles.conSection}`}>
            <div className={styles.layoutHero}>
                <div className={styles.boxImage} data-aos="fade-up">
                    <Image src="/images/Pixelgrade.png" alt="iamge hero" width={391} height={407} className={`floatY {styles.imageHero}`} />
                </div>
                <div className={styles.boxContentHero}>
                    <h2 className={styles.h1Hero}>The unseen of spending three years
                        <span className=""> at Pixelgrade</span></h2>
                    <p className={`my-4 ${styles.heroDescription}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <Link href="/" className={styles.btnRegister}>Learn More</Link>
                </div>

            </div>
        </div>
        </section>
        

    )
}