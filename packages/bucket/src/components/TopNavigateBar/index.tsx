import ActiveLink from '../ActiveLink';
import Typograph from '../typograph';
import styles from './topNavigateBar.module.scss';
import Image from 'next/image';

interface INavigator {
  type?: 'navigator' | 'mypage' | 'settingNavigator' | 'profileNavigator';
}
const TopNavigateBar = ({ type = 'navigator' }: INavigator) => {
  const renderNavigator = () => {
    switch (type) {
      case 'navigator':
        return (
          <div>
            <ActiveLink href={'login'}>
              <Image src="/arrow_left.svg" alt="arrow" width={24} height={24} />
            </ActiveLink>
          </div>
        );
      case 'mypage':
        return (
          <div className={styles.myPageLayoutContainer}>
            <Typograph variant="title1">bucket</Typograph>
            <Image src="/setting.svg" alt="arrow" width={24} height={24} />
          </div>
        );
      case 'settingNavigator':
        return (
          <div className={styles.setting}>
            <ActiveLink href={'login'}>
              <Image src="/arrow_left.svg" alt="arrow" width={24} height={24} />
            </ActiveLink>
            <Typograph variant="body1">bucket</Typograph>
            <Typograph variant="body2" className={styles.correction}>
              수정
            </Typograph>
          </div>
        );
      case 'profileNavigator':
        return (
          <div className={styles.setting}>
            <ActiveLink href={'login'}>
              <Image src="/arrow_left.svg" alt="arrow" width={24} height={24} />
            </ActiveLink>
            <Typograph variant="body1">프로필관리</Typograph>
            <Typograph variant="body2" className={styles.correction}>
              수정
            </Typograph>
          </div>
        );
    }
  };
  return (
    <div className={styles.topNavigateBarContainer}>{renderNavigator()}</div>
  );
};

export default TopNavigateBar;
