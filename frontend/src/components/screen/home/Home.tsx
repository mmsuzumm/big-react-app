import { useState, FC } from 'react';
import Popup from '../auth/auth-popup/Popup';
import Button from '../../ui/button/Button';

const Home: FC = () => {
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
    <div>
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
    </div>
  );
};

export default Home;
