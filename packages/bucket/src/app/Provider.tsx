'use client';

import { SessionProvider } from 'next-auth/react';

const Providers = (props: any) => {
  const { session, children } = props;

  return (
    <SessionProvider session={session} refetchInterval={0}>
      {children}
    </SessionProvider>
  );
};

export default Providers;
