import { FC, useState } from 'react';
import styles from '../auth.module.scss';
import Button from '../../../ui/button/Button';

const Login: FC = () => {
  const [inputData, setInputData] = useState({
    login: '',
    pass: '',
    rePass: '',
  });
  return (
    <>
      <form className={styles.authWindow}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={inputData['login']}
            onChange={(e) =>
              setInputData({ ...inputData, login: e.target.value })
            }
            placeholder="Email or phone"
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            value={inputData['pass']}
            onChange={(e) =>
              setInputData({ ...inputData, pass: e.target.value })
            }
            placeholder="Password"
          ></input>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => {}}
            title={'Register a new account'}
            disabled={false}
          >
            Register
          </Button>
        </div>
      </form>
    </>
  );
};

export default Login;
