import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./auth";

type Props = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: Props) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    return null;
  } catch (error) {
    return error instanceof FirebaseError ? error.code : "something wrong";
  }
};
