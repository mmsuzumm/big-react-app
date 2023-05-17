/**
 * Creates a navigation menu at the top
 * or
 * creates a navigation hamburger-menu at the top if client is a phone
 */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FullAuth from '../../screen/auth/full-auth/FullAuth';
import styles from './navbar.module.scss';
import { Context } from '../../../index';

const Menu = () => {
  const { user } = useContext(Context);
  console.log(user?.isAuth);

  return (
    <nav className={styles.navBar}>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.reactLinks}>
          Home
        </Link>
        <Link to="/contacts" className={styles.reactLinks}>
          Contacts
        </Link>
        <Link to="/about" className={styles.reactLinks}>
          About
        </Link>
      </div>
      {user?.isAuth ? <div></div> : <FullAuth></FullAuth>}
    </nav>
  );
};

export default Menu;
