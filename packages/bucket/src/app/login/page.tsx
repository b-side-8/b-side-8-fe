'use client';
import Typograph from '@/components/Typograph';
import styles from './login.module.scss';
import Image from 'next/image';
import { LoginButton, LogoutButton } from '@/components/Buttons/SnsButton';
import { useSession } from 'next-auth/react';
import Button from '@/components/Buttons';

export default function Login() {
  const { data: session } = useSession();

  return (
    <div className={styles.mobileContainer}>
      {session ? <>{session.user?.name}</> : <>로그인 되지 않았음</>}
      <div className={styles.loginContainer}>
        dd
        <div className={styles.titleWrap}>
          <Typograph className={styles.subtitleText} variant='subtitle'>
            나만의 버킷리스트
          </Typograph>
          <h1 className={styles.logoText}>bucket</h1>
        </div>
        <Image
          src='/images/logo.png'
          width={200}
          height={200}
          alt='bucket logo'
        />
      </div>
      <Button size='small'>
        <Typograph variant='body3'>버튼</Typograph>
      </Button>
      <LoginButton provider='kakao' />
      <LogoutButton />
    </div>
  );
}
