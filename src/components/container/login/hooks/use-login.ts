import { login } from "libs/firebase/auth/login";
import { signUp } from "libs/firebase/auth/sign-up";
import { useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "components/hooks/use-router";

type State = {
  email: string;
  password: string;
  isProcessing: boolean;
  errorMessage: string | null;
};
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
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();

  const onLoginSubmit = async () => {
    setIsProcessing(true);
    setErrorMessage(null);
    const error = await login({ email, password });
    setIsProcessing(false);
    if (error === null) {
      router.push("/");
    } else {
      const errorMessage =
        error === "auth/invalid-email"
          ? "メールアドレスの形式が正しくありません"
          : error === "auth/wrong-password" || error === "auth/user-not-found"
          ? "メールアドレスとパスワードが一致しません"
          : "不明なエラー";
      setErrorMessage(errorMessage);
    }
  };
  const onSignUpSubmit = async () => {
    setIsProcessing(true);
    setErrorMessage(null);
    const error = await signUp({ email, password });
    setIsProcessing(false);
    if (error === null) {
      router.push("/");
    } else {
      console.log({ error });
      const errorMessage =
        error === "auth/invalid-email"
          ? "メールアドレスの形式が正しくありません"
          : error === "auth/email-already-in-use"
          ? "メールアドレスが既に使用されています"
          : error === "auth/weak-password"
          ? "パスワードは6文字以上設定してください"
          : "不明なエラー";
      setErrorMessage(errorMessage);
    }
  };

  return [
    { email, password, isProcessing, errorMessage },
    { setEmail, setPassword, onLoginSubmit, onSignUpSubmit },
  ];
};
