import styles from "./index.module.css";
import { useLoginFrom } from "./hooks/use-login-form";

type Props = {
  email: string;
  password: string;
  errorMessage: string | null;
  isProcessing: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onLoginSubmit: () => Promise<void>;
  onSignUpSubmit: () => Promise<void>;
};

const LoginPresenter = ({
  email,
  password,
  errorMessage,
  isProcessing,
  ...handlers
}: Props) => {
  const { onEmailChange, onPasswordChange, onLoginSubmit, onSignUpSubmit } =
    useLoginFrom(handlers);

  return (
    <>
      <form>
        <input type="email" value={email} onChange={onEmailChange} />
        <input type="password" value={password} onChange={onPasswordChange} />
        {isProcessing ? (
          <span>…</span>
        ) : (
          <>
            <input type="submit" value="ログイン" onClick={onLoginSubmit} />
            <input type="submit" value="新規登録" onClick={onSignUpSubmit} />
          </>
        )}
      </form>
      {errorMessage !== null && (
        <p className={styles["error-message"]}>{errorMessage}</p>
      )}
    </>
  );
};

export default LoginPresenter;
