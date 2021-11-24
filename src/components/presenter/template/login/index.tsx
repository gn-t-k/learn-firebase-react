import { ChangeEvent, FormEvent } from "react";
import styles from "./index.module.css";

type Props = {
  email: string;
  onEmailChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  onLoginSubmit: () => void;
  onSignUpSubmit: () => void;
};

export const Login = (props: Props): JSX.Element => {
  const { email, password } = props;
  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onEmailChange(event.target.value);
  };
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onPasswordChange(event.target.value);
  };
  const onLoginSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onLoginSubmit();
  };
  const onSignUpSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onSignUpSubmit();
  };

  return (
    <form>
      <input type="email" value={email} onChange={onEmailChange} />
      <input type="password" value={password} onChange={onPasswordChange} />
      <input type="submit" value="ログイン" onClick={onLoginSubmit} />
      <input type="submit" value="新規登録" onClick={onSignUpSubmit} />
    </form>
  );
};

export default Login;
