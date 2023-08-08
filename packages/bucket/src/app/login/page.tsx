'use client';
import Typograph from '@/components/typograph';
import styles from './login.module.scss';
import Image from 'next/image';
import { LoginButton, LogoutButton } from '@/components/Buttons/SnsButton';
import { useSession } from 'next-auth/react';
import Button from '@/components/Buttons';

export default function Login() {
  const { data: session } = useSession();

  return (
    <div className={styles.mobileContainer}>
      <div className={styles.loginContainer}>
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
      <a
        href={
          'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=20b68e93f8a5a97696de7503ec0e8315&redirect_uri=http%3A%2F%2F49.50.160.93%3A7070%2Foauth%2Fkakao'
        }
      >
        <LoginButton provider='kakao' />
      </a>
      {/* <LogoutButton /> */}
    </div>
  );
}
