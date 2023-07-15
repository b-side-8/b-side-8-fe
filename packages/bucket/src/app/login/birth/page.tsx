'use client';
import TextField from '@/components/TextField';
import TopNavigateBar from '@/components/TopNavigateBar';
import Typograph from '@/components/Typograph';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Buttons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './birth.module.scss';

function NcikName() {
  const router = useRouter();

  return (
    <div className={styles.birthWrapper}>
      <div>
        <TopNavigateBar />
        <Typograph className={styles.birthTitle} variant='title1'>
          생년월일이 궁금해요.
        </Typograph>
        <div className={styles.textFieldWrapper}>
          <TextField type='number' size='small' placeholder='YYYY' />
          <TextField type='number' size='small' placeholder='MM' />
          <TextField type='number' size='small' placeholder='DD' />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          size='large'
          onClick={() => {
            router.push('/login/gender');
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

export default NcikName;
