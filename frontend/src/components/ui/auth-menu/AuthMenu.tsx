import { FC } from 'react';
import styles from './auth-menu.module.css';

interface IAuthMenu {
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
  isRegister: boolean;
}

const AuthMenu: FC<IAuthMenu> = ({ setIsRegister, isRegister }) => {
  const authMenuClassNames = `${styles.authMenuRegister} ${
    isRegister ? styles.registerActive : styles.loginActive
  }`;
  return (
    <div className={authMenuClassNames}>
      <h2 onClick={() => !isRegister && setIsRegister(true)}>REGISTER</h2>
      <h2 onClick={() => isRegister && setIsRegister(false)}>LOGIN</h2>
    </div>
  );
};

export default AuthMenu;
