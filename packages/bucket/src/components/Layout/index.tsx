import styles from './layout.module.scss';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.paddingLayout}>{children}</div>
    </div>
  );
};

export default Layout;
