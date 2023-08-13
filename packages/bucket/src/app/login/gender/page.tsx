'use client';
import TopNavigateBar from '@/components/TopNavigateBar';
import Typograph from '@/components/typograph';
import Button from '@/components/Buttons';
import Card from '@/components/Card';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from './gender.module.scss';
import userInfoStore from '@/zustand/userInfoStore';

const useUserInfoGender = () => {
  return userInfoStore((store) => ({
    userInfo: store.userInfo,
    setGender: store.setGender,
  }));
};

export default function Gender() {
  const { userInfo, setGender } = useUserInfoGender();
  const router = useRouter();

  const onCardClick = (gender: 'man' | 'woman') => {
    setGender(gender);
  };
  return (
    <div className={styles.genderWrapper}>
      <div>
        <TopNavigateBar />
        <Typograph className={styles.genderTitle} variant='title1'>
          성별을 알려주세요.
        </Typograph>
        <div className={styles.genderCardWrapper}>
          <Card
            onClick={onCardClick}
            active={userInfo.gender === 'man'}
            type={'man'}
            size={80}
          />
          <Card
            active={userInfo.gender === 'woman'}
            onClick={onCardClick}
            type={'woman'}
            size={80}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          size='large'
          onClick={() => {
            router.push('/login/profile');
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
