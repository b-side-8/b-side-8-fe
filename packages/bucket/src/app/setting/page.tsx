import { SETTING_ROUTE } from '@/constants';
import styles from './setting.module.scss';
import Link from 'next/link';
import Typograph from '@/components/Typograph';
import Image from 'next/image';

export default function Setting() {
  return (
    <div>
      <div className={styles.menuWrapper}>
        {SETTING_ROUTE.map(route => (
          <div className={styles.menuItem} key={route.name}>
            <Link className={styles.flexWrappper} href={route.path}>
              <Typograph variant="body2">{route.name}</Typograph>
              <Image
                src={'arrow_right.svg'}
                alt={'arrow_right'}
                width={24}
                height={24}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.logoutButton}>로그아웃</div>
    </div>
  );
}
