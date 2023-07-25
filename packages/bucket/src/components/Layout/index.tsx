import styles from './layout.module.scss';
import Image from 'next/image';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.layoutContainer} h-screen`}>
      <div className={`${styles.paddingLayout} flex flex-col h-full`}>
        {children}
      </div>
      <div className="h-16">
        <div className="flex">
          <div className="w-full">
            <Image
              className="flex m-auto"
              src="/home.svg"
              width={32}
              height={32}
              alt={'home'}
            />
          </div>
          <div className="w-full">
            <Image
              className="m-auto"
              src="/plus_circle.svg"
              width={32}
              height={32}
              alt={'addBucket'}
            />
          </div>
          <div className="w-full">
            <Image
              className="m-auto"
              src="/smile.svg"
              width={32}
              height={32}
              alt={'smile'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
