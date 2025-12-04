"use client"

import CardBlog from '../Card/CardBlog/CardBlog'
import styles from './Blog.module.css'



export default function Blog() {

  const blogData = [
    {
      image: "/images/7776b16fd94779a6038df61ab3795e3388d1c731.jpg",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      linkReadmore: "/"
    },
    {
      image: "/images/5b68113ad80dfca071d88cdc680544ed9cbcf9ed.jpg",
      title: "What are your safeguarding responsibilities and how can you manage them?",
      linkReadmore: "/"
    },{
      image: "/images/a353eb29cb260e5e45b8deb813272ee1a31ac6f1.jpg",
      title: "Revamping the Membership Model with Triathlon Australia",
      linkReadmore: "/"
    }
  ]
  return (
    <section className={styles.section}>
      <div className={`container ${styles.conBlog}`}>
        <div className={styles.boxTitleBlog}>
          <h2 className='text-center'>Caring is the new marketing</h2>
          <p className='text-center'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
        <div className={styles.blogGroup}>
          <CardBlog image={blogData[0].image} title={blogData[0].title} linkReadmore={blogData[0].linkReadmore} />
          <CardBlog image={blogData[1].image} title={blogData[1].title} linkReadmore={blogData[1].linkReadmore} />
          <CardBlog image={blogData[2].image} title={blogData[2].title} linkReadmore={blogData[2].linkReadmore} />
        </div>
      </div>

    </section>

  );
}