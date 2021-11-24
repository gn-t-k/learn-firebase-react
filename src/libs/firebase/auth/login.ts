import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./auth";

type Props = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: Props) => {
  await signInWithEmailAndPassword(auth, email, password);
};
