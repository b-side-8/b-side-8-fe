'use client';
import TextField from '@/components/TextField';
import TopNavigateBar from '@/components/TopNavigateBar';
import Typograph from '@/components/typograph';
import styles from './nickName.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Buttons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import userInfoStore from '@/zustand/userInfoStore';

const useUserInfoNickName = () => {
  return userInfoStore((store) => ({
    userInfo: store.userInfo,
    setNickname: store.setNickname,
  }));
};

export default function NcikName() {
  const { userInfo, setNickname } = useUserInfoNickName();
  const [error, setError] = useState(false);

  const router = useRouter();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // 정규식 패턴을 사용하여 입력값 유효성 검사
    const regex = /^[a-zA-Z가-힣]{0,10}$/;
    if (regex.test(value)) {
      setNickname(value);
      setError(false);
    } else {
      setNickname(value);
      setError(true);
    }
  };

  const onClickNext = () => {
    if (!error) router.push('/login/birth');
  };

  return (
    <div className={styles.nickNameWrapper}>
      <div>
        <TopNavigateBar />
        <Typograph className={styles.nickNameTitle} variant='title1'>
          닉네임을 만들어 볼까요?
        </Typograph>
        <div className={styles.textFieldWrapper}>
          <TextField
            value={userInfo.nickname}
            placeholder='닉네임'
            helperWaringText='한글 또는 영문 10자 이하로 입력해주세요.'
            helperText='한글 또는 영문 10자 이하로 입력해주세요.'
            error={error}
            isvalid={!error}
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
