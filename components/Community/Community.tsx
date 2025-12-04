"use client"
import styles from './Community.module.css'
import Clients from '../Clients/Clients';
import CardComunity from '../Card/CardComunity/CardComunity';

type cardContentTextType = {
  icon: string;
  title: string;
  description?: string;
}

const cardContentText: cardContentTextType[] = [
  {
    icon: "/icons/Icon-manage-section01.png",
    title: "Membership Organisations",
    description: "Our membership management software provides full automation of membership renewals and payments",
  }, {
    icon: "/icons/Icon-manage-section02.png",
    title: "National Associations",
    description: "Our membership management software provides full automation of membership renewals and payments",
  }, {
    icon: "/icons/Icon-manage-section03.png",
    title: "Clubs And Groups",
    description: "Our membership management software provides full automation of membership renewals and payments",
  }
]

export default function Community() {
  return (
    <section className={styles.sectionCommunity}>
      <div className={`container ${styles.conCommunity}`}>
        <Clients />
        <div className={styles.contentCommunity}>
          <div className={styles.headText}>
            <h2 className={styles.headComunity}>Manage your entire community <br />in a single system</h2>
            <p>Who is Nextcent suitable for?</p>
          </div>
          <div className={styles.groupCard}>
            <CardComunity icon={cardContentText[0].icon} title={cardContentText[0].title} description={cardContentText[0].description} />
            <CardComunity icon={cardContentText[1].icon} title={cardContentText[0].title} description={cardContentText[0].description} />
            <CardComunity icon={cardContentText[2].icon} title={cardContentText[0].title} description={cardContentText[0].description} />
          </div>
        </div>
      </div>
    </section>
  );
}