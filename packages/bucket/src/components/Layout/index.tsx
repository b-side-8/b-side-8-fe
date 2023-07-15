import styles from './layout.module.scss';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.layoutContainer}>{children}</div>;
};

export default Layout;
