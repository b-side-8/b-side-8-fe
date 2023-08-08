import TopNavigateBar from '@/components/TopNavigateBar';
import styles from './mypage.module.scss';
import Image from 'next/image';
import Typograph from '@/components/typograph';
import TopicList from '@/components/TopicList';

export default function Mypage() {
  return (
    <div>
      <TopNavigateBar type='mypage' />
      <div className={styles.myCardWrapper}>
        <div className={styles.myCard}>
          <div className={styles.myCardHeader}>
            <div className={styles.myCardHeaderProfile}>
              <Image
                src='/images/logo.png'
                width={48}
                height={48}
                alt={'myProfile'}
              />
              <div className={styles.myInfo}>
                <Typograph variant='body1'>김이름</Typograph>
                <Typograph variant='caption2'>2023.06.23</Typograph>
              </div>
            </div>
            <Image
              src='/edit_icon.svg'
              width={24}
              height={24}
              alt={'myProfile'}
            />
          </div>
          <div className={styles.myCardContents}>
            <Image
              src='/edit_icon.svg'
              width={24}
              height={24}
              alt={'myProfile'}
            />
            <Typograph variant='caption2'>
              버킷리스트를 작성하여 목표를 달성해 보세요!
            </Typograph>
          </div>
        </div>
      </div>
      <div className={styles.topicListWrapper}>
        <TopicList />
        <TopicList />
        <TopicList />
      </div>
    </div>
  );
}
