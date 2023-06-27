import KakaoProvider from 'next-auth/providers/kakao';
import type { NextAuthOptions, Session } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET as string,
    }),
  ],
};
