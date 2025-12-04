import styles from './CTA.module.css'
import Link from 'next/link';
export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.conCTA}`}>
        <h1 className={styles.h1Black}>Pellentesque suscipit <br />
          fringilla libero eu.</h1>
        <Link href="/" className={styles.btnGetDemo}>Get a Demo <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" />
        </svg></Link>
      </div>


    </section>
  );
}