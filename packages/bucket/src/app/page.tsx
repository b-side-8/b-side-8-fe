'use client';

import Typograph from '@/components/Typograph';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const onClick = async () => {
    const res = await fetch(
      'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=20b68e93f8a5a97696de7503ec0e8315&redirect_uri=http%3A%2F%2F49.50.160.93%3A7070%2Foauth%2Fkakao'
    );
    console.log(res.url);
    router.push(res.url);
  };

  return (
    <div>
      <Typograph variant='h1'>h1</Typograph>
      <Typograph variant='h2'>h2</Typograph>
      <Typograph variant='body1'>body1</Typograph>
      <Typograph variant='title1'>title1</Typograph>
      <Typograph variant='span'>span</Typograph>
      <button onClick={onClick}>요청</button>
      <a
        href={
          'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=20b68e93f8a5a97696de7503ec0e8315&redirect_uri=http%3A%2F%2F49.50.160.93%3A7070%2Foauth%2Fkakao'
        }
      >
        카카오 로그인
      </a>
    </div>
  );
}
