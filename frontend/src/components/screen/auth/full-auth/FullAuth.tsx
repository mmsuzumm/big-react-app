/** This is the complete snippet of the authorization popup and buttons for it. 
Rendered separately so that the entire menu fragment is not rendered */

import { useState } from 'react';
import Button from '../../../ui/button/Button';
import Popup from '../auth-popup/Popup';

function FullAuth() {
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
    <>
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
    </>
  );
}

export default FullAuth;
