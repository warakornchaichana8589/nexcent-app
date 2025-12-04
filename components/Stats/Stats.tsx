"use client"
import styles from './Stats.module.css';
import Image from 'next/image';
export default function Stats() {
  return (
    <section className={styles.sectionStats}>
      <div className={`container ${styles.conSection}`}>
        <div className={styles.boxContent}>
          <h2>Helping a local <br />
            <span className={styles.textGreen}>business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className={styles.gridStats}>
          <div className={styles.item}>
            <Image src="/icons/helping-Icon.png" alt="" width={48} height={48} className={styles.imageIcon} />
            <div className={styles.stats}>
              <h3>2,245,341</h3>
              <p>Members</p>
            </div>
          </div>
          <div className={styles.item}>
            <Image src="/icons/helping-Icon-1.png" alt="" width={48} height={48} className={styles.imageIcon} />
            <div className={styles.stats}>
              <h3>2,245,341</h3>
              <p>Members</p>
            </div>
          </div>
          <div className={styles.item}>
            <Image src="/icons/helping-Icon-2.png" alt="" width={48} height={48} className={styles.imageIcon} />
            <div className={styles.stats}>
              <h3>2,245,341</h3>
              <p>Members</p>
            </div>
          </div>
          <div className={styles.item}>
            <Image src="/icons/helping-Icon-3.png" alt="" width={48} height={48} className={styles.imageIcon} />
            <div className={styles.stats}>
              <h3>2,245,341</h3>
              <p>Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}
