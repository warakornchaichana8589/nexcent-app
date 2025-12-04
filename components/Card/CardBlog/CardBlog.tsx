"use client"
import styles from './CardBlog.module.css'
import Image from 'next/image';
import Link from 'next/link';
type CardCommunityProps = {
    image: string;
    title: string;
    linkReadmore: string;
};

export default function CardBlog({
    image,
    title,
    linkReadmore,
}: CardCommunityProps) {
    return (
        <div className={styles.mainCard} data-aos="fade-up">
            <div className={styles.boxImageBlog}>
                <Image src={image} width={400} height={400} alt={`${title} image`} className={styles.imageBlog} />
            </div>
            <div className={`${styles.paddingCard}`} > 
                <div className={styles.textCard}>
                    <h4 className={styles.headerTitle}>
                        {title}
                    </h4>
                    <Link href={linkReadmore} className={styles.readmoreLink}>Readmore <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" stroke="#4CAF4F" stroke-width="1.5" stroke-linecap="round" />
                    </svg></Link>
                </div>

            </div>

        </div>
    );
}