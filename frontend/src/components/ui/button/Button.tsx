import { FC } from 'react';
import styles from './my-button.module.css';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  title?: string;
  disabled: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  title,
  disabled = false,
}) => {
  return (
    <button
      className={styles.myButton}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
