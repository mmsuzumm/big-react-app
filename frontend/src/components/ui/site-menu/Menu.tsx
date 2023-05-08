/**
 * Creates a navigation menu at the top
 * or
 * creates a navigation hamburger-menu at the top if client is a phone
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import Popup from '../../screen/auth/auth-popup/Popup';
import styles from './Menu.module.scss';

const Menu = () => {
  const [authActive, setAuthActive] = useState<boolean>(false);
  const [authType, setAuthType] = useState<boolean>(true);

  const handleLoginClick = () => {
    setAuthType(false);
    setAuthActive(true);
  };

  const handleRegisterClick = () => {
    setAuthType(true);
    setAuthActive(true);
  };
  return (
    <nav className={styles.navBar}>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/about">About</Link>
      <Button onClick={handleRegisterClick} title={'Register'} disabled={false}>
        Register
      </Button>
      <Button onClick={handleLoginClick} title={'Login'} disabled={false}>
        Login
      </Button>

      <Popup
        active={authActive}
        setActive={setAuthActive}
        authType={authType}
        setAuthType={setAuthType}
      ></Popup>
    </nav>
  );
};

export default Menu;
