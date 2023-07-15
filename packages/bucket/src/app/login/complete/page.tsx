'use client';
import TextField from '@/components/TextField';
import TopNavigateBar from '@/components/TopNavigateBar';
import Typograph from '@/components/Typograph';
import styles from './complete.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Buttons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function Complete() {
  const router = useRouter();

  return (
    <div className={styles.nickNameWrapper}>
      <div>
        <TopNavigateBar />
        <div className={styles.ImagedWrapper}>
          <Image
            src='/images/welcome.png'
            alt={'profile'}
            width={300}
            height={156}
          />
          <Typograph variant='title1'>버킷 세계에 오신걸 환영해요!</Typograph>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          size='large'
          onClick={() => {
            router.push('/main');
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
