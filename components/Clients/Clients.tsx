import styles from './Clients.module.css'
import Image from 'next/image';

export default function Clients() {
  return (
    <div className={styles.clientsLayout}>
      <div className={styles.headText}>
        <h2 className={styles.ourClients}>
          Our Clients
        </h2>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className={styles.groupLogo}>
        <div className={styles.item}> <Image src='/images/logo-bran/Logo.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
        <div className={styles.item}> <Image src='/images/logo-bran/Logo-1.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
        <div className={styles.item}><Image src='/images/logo-bran/Logo-2.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
        <div className={styles.item}><Image src='/images/logo-bran/Logo-3.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
        <div className={styles.item}><Image src='/images/logo-bran/Logo-4.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
        <div className={styles.item}><Image src='/images/logo-bran/Logo-5.png' alt='logo' width={48} height={48} className={styles.imageLogo} /></div>
       
      </div>
    </div>
  );
}