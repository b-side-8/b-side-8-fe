'use client';
import TextField from '@/components/TextField';
import TopNavigateBar from '@/components/TopNavigateBar';
import Typograph from '@/components/Typograph';
import styles from './profile.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Buttons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function Profile() {
  const router = useRouter();

  return (
    <div className={styles.nickNameWrapper}>
      <div>
        <TopNavigateBar />
        <Typograph className={styles.profileTitle} variant='title1'>
          프로필 사진을 등록해주세요.
        </Typograph>
        <div className={styles.ImagedWrapper}>
          <Image
            src='/images/profile_default.png'
            alt={'profile'}
            width={160}
            height={160}
          />
          <button>사진편집</button>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          size='large'
          onClick={() => {
            router.push('login/complete');
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
