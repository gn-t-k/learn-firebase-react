import { logout as firebaseLogout } from "libs/firebase/auth/logout";
import { useRouter } from "./use-router";

export const useLogout = () => {
  const router = useRouter();
  const logout = async () => {
    router.push("/login");
    await firebaseLogout();
  };

  return logout;
};
