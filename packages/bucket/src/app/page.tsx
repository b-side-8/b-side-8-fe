'use client';

import Typograph from '@/components/Typograph';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Typograph variant="h1">h1</Typograph>
      <Typograph variant="h2">h2</Typograph>
      <Typograph variant="body1">body1</Typograph>
      <Typograph variant="title1">title1</Typograph>
      <Typograph variant="span">span</Typograph>
    </div>
  );
}
