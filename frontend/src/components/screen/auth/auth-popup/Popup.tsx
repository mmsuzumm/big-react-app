import { FC } from 'react';
import styles from './popup.module.css';
import Login from '../login/Login';
import Register from '../register/Register';
import AuthMenu from '../../../ui/auth-menu/AuthMenu';

interface IPopup {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  authType: boolean;
  setAuthType: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: FC<IPopup> = ({ active, setActive, authType, setAuthType }) => {
  return (
    <div
      className={
        active
          ? `${styles.popupWindow} ${styles.popupWindowActive}`
          : styles.popupWindow
      }
      onClick={() => setActive(false)}
    >
      <div
        className={styles.popupWindowContent}
        onClick={(e) => e.stopPropagation()}
      >
        <AuthMenu setIsRegister={setAuthType} isRegister={authType}></AuthMenu>
        {authType ? <Register></Register> : <Login></Login>}
      </div>
    </div>
  );
};

export default Popup;