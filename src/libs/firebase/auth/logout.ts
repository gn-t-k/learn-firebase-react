import { signOut } from "firebase/auth";
import { auth } from "./auth";

export const logout = async () => {
  await signOut(auth);
};
