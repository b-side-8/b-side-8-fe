'use client';
import TextField from '@/components/TextField';
import TopNavigateBar from '@/components/TopNavigateBar';
import Typograph from '@/components/Typograph';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Buttons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './birth.module.scss';
import userInfoStore from '@/zustand/userInfoStore';

const useUserInfoNickName = () => {
  return userInfoStore((store) => ({
    userInfo: store.userInfo,
    setBirth: store.setBirth,
  }));
};

function NcikName() {
  const [birthInput, setBirthInput] = useState({
    year: '',
    month: '',
    day: '',
  });
  const { userInfo, setBirth } = useUserInfoNickName();

  const router = useRouter();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthInput({
      ...birthInput,
      [e.target.name]: e.target.value,
    });
  };

  const onClickNext = () => {
    const { year, month, day } = birthInput;
    setBirth(year, month, day);
    router.push('/login/gender');
  };

  return (
    <div className={styles.birthWrapper}>
      <div>
        {JSON.stringify(userInfo)}
        <TopNavigateBar />
        <Typograph className={styles.birthTitle} variant='title1'>
          생년월일이 궁금해요.
        </Typograph>
        <div className={styles.textFieldWrapper}>
          <TextField
            type='number'
            size='small'
            placeholder='YYYY'
            name='year'
            onChange={onChangeInput}
          />
          <TextField
            type='number'
            size='small'
            placeholder='MM'
            name='month'
            onChange={onChangeInput}
          />
          <TextField
            type='number'
            size='small'
            placeholder='DD'
            name='day'
            onChange={onChangeInput}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button size='large' onClick={onClickNext}>
          다음
        </Button>
      </div>
    </div>
  );
}

export default NcikName;
