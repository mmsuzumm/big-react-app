import { FC, useState } from 'react';
import Button from '../../../ui/button/Button';
import { registration } from '../../../../http/userAPI';
// import validatePassword from '../../../../utils/validatePassword';
import styles from '../auth.module.scss';

const Register: FC = () => {
  const singIn = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event?.preventDefault();
    const response = await registration({ ...inputData });
    console.log(response);
  };

  const [inputData, setInputData] = useState({
    email: '',
    username: '',
    password: '',
    rePassword: '',
  });

  return (
    <form className={styles.authWindow}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputData['email']}
          onChange={(e) =>
            setInputData({ ...inputData, email: e.target.value })
          }
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
          value={inputData['password']}
          onChange={(e) =>
            setInputData({ ...inputData, password: e.target.value })
          }
          placeholder="Password"
        ></input>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="password"
          value={inputData['rePassword']}
          onChange={(e) =>
            setInputData({ ...inputData, rePassword: e.target.value })
          }
          placeholder="Confirm password"
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
  );
};

export default Register;
