"use client"
import styles from './Testimonial.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Testimonial() {
  return (
    <section className={styles.sectionTestimonial}>
      <div className={`container ${styles.conSection}`}>
        <div className={styles.layoutHero}>
          <div className={styles.boxImage}>
            <div className={styles.boxAspec}>
              <Image src="/images/testimonial.jpg" alt="iamge testimonial" width={500} height={500} className={styles.imageTestimonial} />
            </div>

          </div>
          <div className={styles.boxContentHero}>

            <p className={`my-4 ${styles.textCon}`}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h4 className={styles.h4ColorGreen}>
              Tim Smith
            </h4>

            <p>British Dragon Boat Racing Association</p>
            <div className={`py-4 ${styles.iconAndLink}`}>
              <div className={styles.groupIcons}>
                <div className={styles.item}> <Image src='/images/logo-bran/Logo.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
                <div className={styles.item}> <Image src='/images/logo-bran/Logo-1.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
                <div className={styles.item}><Image src='/images/logo-bran/Logo-2.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
                <div className={styles.item}><Image src='/images/logo-bran/Logo-3.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
                <div className={styles.item}><Image src='/images/logo-bran/Logo-4.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
                <div className={styles.item}><Image src='/images/logo-bran/Logo-5.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
              </div>
              <Link href="/" className={`${styles.meetAllLink}`}>Meet all customers <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" stroke="#4CAF4F" stroke-width="1.5" stroke-linecap="round" />
              </svg></Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}