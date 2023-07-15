'use client';

import { useRouter } from 'next/navigation';

function ActiveLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      // style={style}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
