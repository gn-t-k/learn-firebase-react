import Login from "components/presenter/template/login";
import { useLogin } from "./use-login";

const LoginContainer = () => {
  const [
    { email, password },
    { setEmail, setPassword, onLoginSubmit, onSignUpSubmit },
  ] = useLogin();

  return (
    <Login
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
