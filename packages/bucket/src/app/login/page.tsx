import Typograph from '@/components/Typograph';
import styles from './login.module.scss';
import Image from 'next/image';

export default function Login() {
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
      <button className={styles.kakaoButton}>로그인</button>
    </div>
  );
}
