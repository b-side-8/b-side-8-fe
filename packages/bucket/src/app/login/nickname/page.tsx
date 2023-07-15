'use client';
import TextField from '@/components/TextField';
import TopNavigateBar from '@/components/TopNavigateBar';
import Typograph from '@/components/Typograph';
import styles from './nickName.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Buttons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function NcikName() {
  const router = useRouter();

  return (
    <div className={styles.nickNameWrapper}>
      <div>
        <TopNavigateBar />
        <Typograph className={styles.nickNameTitle} variant='title1'>
          닉네임을 만들어 볼까요?
        </Typograph>
        <div className={styles.textFieldWrapper}>
          <TextField
            placeholder='닉네임'
            helperWaringText='이미 사용중인 닉네임이에요'
            helperText='한글 또는 영문 10자 이하로 입력해주세요.'
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          size='large'
          onClick={() => {
            router.push('/login/birth');
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

export default NcikName;
