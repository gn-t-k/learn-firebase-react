import LoginPresenter from "components/presenter/template/login";
import { useLogin } from "./hooks/use-login";

const LoginContainer = () => {
  const [
    { email, password },
    { setEmail, setPassword, onLoginSubmit, onSignUpSubmit },
  ] = useLogin();

  return (
    <LoginPresenter
      {...{
        email,
        password,
        onEmailChange: setEmail,
        onPasswordChange: setPassword,
        onLoginSubmit,
        onSignUpSubmit,
      }}
    />
  );
};

export default LoginContainer;
