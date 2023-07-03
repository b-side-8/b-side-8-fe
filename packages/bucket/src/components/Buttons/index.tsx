import styles from './button.module.scss';

interface IButtonProps {
  varient?: 'social' | 'general' | 'container';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}
const Button = ({
  varient,
  onClick,
  type,
  isDisabled,
  size,
  children,
  color,
  isLoading, // 추후 구현
}: IButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${styles.button} ${
        size === 'large' ? styles.buttonLarge : styles.buttonSmall
      }`}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;
