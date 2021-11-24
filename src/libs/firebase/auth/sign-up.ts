import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./auth";

type Props = {
  email: string;
  password: string;
};

export const signUp = async ({ email, password }: Props) => {
  await createUserWithEmailAndPassword(auth, email, password);
};
