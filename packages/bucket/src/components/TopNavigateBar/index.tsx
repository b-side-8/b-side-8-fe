import ActiveLink from '../ActiveLink';
import Typograph from '../Typograph';
import styles from './topNavigateBar.module.scss';
import Image from 'next/image';

interface INavigator {
  type?: 'navigator' | 'mypage' | 'settingNavigator';
}
const TopNavigateBar = ({ type = 'navigator' }: INavigator) => {
  const renderNavigator = () => {
    switch (type) {
      case 'navigator':
        return (
          <div className={styles.paddingLayout}>
            <ActiveLink href={'login'}>
              <Image src='/arrow_left.svg' alt='arrow' width={24} height={24} />
            </ActiveLink>
          </div>
        );
      case 'mypage':
        return (
          <div className={styles.paddingSpaceBetweenLayout}>
            <Typograph variant='title1'>bucket</Typograph>
            <Image src='/setting.svg' alt='arrow' width={24} height={24} />
          </div>
        );
      case 'settingNavigator':
        return <Typograph variant='title1'>bucket</Typograph>;
    }
  };
  return (
    <div className={styles.topNavigateBarContainer}>{renderNavigator()}</div>
  );
};

export default TopNavigateBar;
