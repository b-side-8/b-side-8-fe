'use client';

import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import styles from './snsButton.module.scss';
import Image from 'next/image';
import Button from '..';

interface ISnsButtonProps {
  provider: 'kakao' | 'naver';
}

export const LoginButton = ({ provider }: ISnsButtonProps) => {
  return (
    <Button onClick={() => signIn(provider)} varient='kakao'>
      {provider === 'kakao' ? (
        <div className={styles.btnTextWrap}>
          <Image
            src='/images/kakao_icon.png'
            width={20}
            height={20}
            alt='kakao logo'
          />
          <span>카카오로 로그인</span>
        </div>
      ) : (
        '네이버로 로그인'
      )}
    </Button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href='/register' style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href='/profile'>Profile</Link>;
};
