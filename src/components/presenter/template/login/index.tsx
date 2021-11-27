import { useLoginFrom } from "./hooks/use-login-form";

type Props = {
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onLoginSubmit: () => Promise<void>;
  onSignUpSubmit: () => Promise<void>;
};

const LoginPresenter = ({ email, password, ...handlers }: Props) => {
  const { onEmailChange, onPasswordChange, onLoginSubmit, onSignUpSubmit } =
    useLoginFrom(handlers);

  return (
    <form>
      <input type="email" value={email} onChange={onEmailChange} />
      <input type="password" value={password} onChange={onPasswordChange} />
      <input type="submit" value="ログイン" onClick={onLoginSubmit} />
      <input type="submit" value="新規登録" onClick={onSignUpSubmit} />
    </form>
  );
};

export default LoginPresenter;
