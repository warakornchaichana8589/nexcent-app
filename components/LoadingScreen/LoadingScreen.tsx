import styles from "./LoadingScreen.module.css";
import Image from "next/image";

export default function LoadingScreen({ text = "Loading..." }: { text?: string }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.center}>
        <div className={styles.ringWrap}>
          <span className={styles.ring} />
          <span className={styles.ring2} />
        </div>

        <div className={styles.logoFloat}>
          <Image
            src="/images/LogoWhite.png"
            alt="logo"
            width={140}
            height={24}
            priority
          />
        </div>

        <p className={styles.text}>{text}</p>

        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
