import { useRouter } from "components/hooks/use-router";
import { logout as firebaseLogout } from "libs/firebase/auth/logout";

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    await firebaseLogout();
    router.push("/");
  };

  return logout;
};
