import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./auth";
import { FirebaseError } from "firebase/app";

type Props = {
  email: string;
  password: string;
};

export const signUp = async ({ email, password }: Props) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    return null;
  } catch (error) {
    return error instanceof FirebaseError ? error.code : "something wrong";
  }
};
