import '../styles/global.scss';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './lib/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log('session', session);

  return (
    <html lang='en'>
      <body className={inter.className}>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        {children}
      </body>
    </html>
  );
}
