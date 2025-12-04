import styles from './CardComunity.module.css'
import Image from 'next/image';

type CardCommunityProps = {
    icon: string;
    title: string;
    description?: string;
};

export default function CardComunity({
    icon,
    title,
    description,
}: CardCommunityProps) {
    return (
        <div className={styles.mainCard} data-aos="fade-up">
            <Image src={icon} width={65} height={56} alt={`${title} icon`} />
            <h3 className={styles.header}>
                {title}
            </h3>
            <p>{description}</p>
        </div>
    );
}