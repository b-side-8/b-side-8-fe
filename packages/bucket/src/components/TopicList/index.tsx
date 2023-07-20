'use client';
import Typograph from '../Typograph';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './topicList.module.scss';
import 'swiper/css';
import Image from 'next/image';

export default function TopicList() {
  return (
    <div>
      <Typograph className={styles.topicTitle} variant='body1'>
        🔥 TopicList
      </Typograph>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={styles.topicItem}>
          <Image
            width={198}
            height={132}
            alt='image'
            src='/images/image_1.png'
          />
          <div className={styles.topicItemText}>
            <Typograph variant='body2'>매일 5분 명상</Typograph>
            <Typograph variant='caption1' className={styles.dDayWrapper}>
              D-43
            </Typograph>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.topicItem}>
          <Image
            width={198}
            height={132}
            alt='image'
            src='/images/image_1.png'
          />
          <div className={styles.topicItemText}>
            <Typograph variant='body1'>매일 5분 명상</Typograph>
            <Typograph variant='body1' className={styles.dDayWrapper}>
              D-43
            </Typograph>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.topicItem}>
          <Image
            width={198}
            height={132}
            alt='image'
            src='/images/image_1.png'
          />
          <div className={styles.topicItemText}>
            <Typograph variant='body1'>매일 5분 명상</Typograph>
            <Typograph variant='body1' className={styles.dDayWrapper}>
              D-43
            </Typograph>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.topicItem}>
          <Image
            width={198}
            height={132}
            alt='image'
            src='/images/image_1.png'
          />
          <div className={styles.topicItemText}>
            <Typograph variant='body1'>매일 5분 명상</Typograph>
            <Typograph variant='body1' className={styles.dDayWrapper}>
              D-43
            </Typograph>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.topicItem}>
          <Image
            width={198}
            height={132}
            alt='image'
            src='/images/image_1.png'
          />
          <div className={styles.topicItemText}>
            <Typograph variant='body1'>매일 5분 명상</Typograph>
            <Typograph variant='body1' className={styles.dDayWrapper}>
              D-43
            </Typograph>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
