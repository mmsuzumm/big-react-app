import { FC, useState } from 'react';
import Button from '../../../ui/button/Button';
import styles from '../auth.module.scss';
import { login } from '../../../../http/userAPI';

const Login: FC = () => {
  const singIn = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const response = await login({ ...inputData });
    console.log(response);
  };

  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });
  return (
    <>
      <form className={styles.authWindow}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={inputData['email']}
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
            placeholder="Email or phone"
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            value={inputData['password']}
            onChange={(e) =>
              setInputData({ ...inputData, password: e.target.value })
            }
            placeholder="Password"
          ></input>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            onClick={(e) => {
              singIn(e);
            }}
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
