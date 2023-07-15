import ActiveLink from '../ActiveLink';
import styles from './TopNavigateBar.module.scss';
import Image from 'next/image';

const TopNavigateBar = () => {
  return (
    <div className={styles.topNavigateBarContainer}>
      <ActiveLink href={'login'}>
        <Image src='/arrow_left.svg' alt='arrow' width={24} height={24} />
      </ActiveLink>
    </div>
  );
};

export default TopNavigateBar;
