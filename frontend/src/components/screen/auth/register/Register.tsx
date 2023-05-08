import { FC, useState } from 'react';
import Button from '../../../ui/button/Button';
import styles from '../auth.module.scss';

const Register: FC = () => {
  const [inputData, setInputData] = useState({
    mail: '',
    username: '',
    pass: '',
    rePass: '',
  });

  return (
    <form className={styles.authWindow}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputData['mail']}
          onChange={(e) => setInputData({ ...inputData, mail: e.target.value })}
          placeholder="Email or phone number"
        ></input>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputData['username']}
          onChange={(e) =>
            setInputData({ ...inputData, username: e.target.value })
          }
          placeholder="Username"
        ></input>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="password"
          value={inputData['pass']}
          onChange={(e) => setInputData({ ...inputData, pass: e.target.value })}
          placeholder="Password"
        ></input>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="password"
          value={inputData['rePass']}
          onChange={(e) =>
            setInputData({ ...inputData, rePass: e.target.value })
          }
          placeholder="Confirm password"
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
  );
};

export default Register;
