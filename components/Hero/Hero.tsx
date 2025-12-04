"use client"
import styles from './Hero.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export default function Hero() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.mainHero}>
        <div className="swiper">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            loop
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log("init", swiper)}
            className="mySwiper"
          >
            
            <SwiperSlide>
              <div className={`container ${styles.conSection}`}>
                <div className={styles.layoutHero}>
                   <div className={styles.boxContentHero}>
                  <h1 className={styles.h1Hero}>Lessons and insights <br />
                    <span className={styles.textGreenH1}>from 8 years</span></h1>
                  <p className={`my-4 ${styles.heroDescription}`}>Where to grow your business as a photographer: site or social media?</p>
                  <button className={styles.btnRegister}>Register</button>
                </div>
                <div className={styles.boxImage} data-aos="fade-up" >
                  <Image src="/images/img-sechero.png"  alt="iamge hero" width={391} height={407} className={`floatY ${styles.imageHero}`}/>
                </div>
                </div>
               
              </div>
            </SwiperSlide>
          
            <SwiperSlide>
              <div className={`container ${styles.conSection}`}>
                <div className={styles.layoutHero}>
                   <div className={styles.boxContentHero}>
                  <h1 className={styles.h1Hero}>Lessons and insights <br />
                    <span className={styles.textGreenH1}>from 8 years</span></h1>
                  <p className={`my-4 ${styles.heroDescription}`}>Where to grow your business as a photographer: site or social media?</p>
                  <button className={styles.btnRegister}>Register</button>
                </div>
                <div className={styles.boxImage} data-aos="fade-up" >
                  <Image src="/images/img-sechero.png"  alt="iamge hero" width={391} height={407} className={`floatY ${styles.imageHero}`}/>
                </div>
                </div>
               
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className={`container ${styles.conSection}`}>
                <div className={styles.layoutHero}>
                   <div className={styles.boxContentHero}>
                  <h1 className={styles.h1Hero}>Lessons and insights <br />
                    <span className={styles.textGreenH1}>from 8 years</span></h1>
                  <p className={`my-4 ${styles.heroDescription}`}>Where to grow your business as a photographer: site or social media?</p>
                  <button className={styles.btnRegister}>Register</button>
                </div>
                <div className={styles.boxImage} data-aos="fade-up" >
                  <Image src="/images/img-sechero.png"  alt="iamge hero" width={391} height={407} className={`floatY ${styles.imageHero}`}/>
                </div>
                </div>
               
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}