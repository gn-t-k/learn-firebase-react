import { login } from "libs/firebase/auth/login";
import { signUp } from "libs/firebase/auth/sign-up";
import { useState, Dispatch, SetStateAction } from "react";

type State = { email: string; password: string };
type Dispatcher = {
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  onLoginSubmit: () => Promise<void>;
  onSignUpSubmit: () => Promise<void>;
};

type Return = [state: State, dispatch: Dispatcher];

export const useLogin = (): Return => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLoginSubmit = async () => {
    await login({ email, password });
  };
  const onSignUpSubmit = async () => {
    await signUp({ email, password });
  };

  return [
    { email, password },
    { setEmail, setPassword, onLoginSubmit, onSignUpSubmit },
  ];
};
