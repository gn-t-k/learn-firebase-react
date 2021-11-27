import { AuthContext } from "components/function/auth-context";
import HomePresenter, { Props } from "components/presenter/template/home";
import { useContext } from "react";
import { useRouter } from "components/hooks/use-router";
import { logout } from "libs/firebase/auth/logout";

const Home = () => {
  const { clientID } = useContext(AuthContext);

  const router = useRouter();
  const onLogoutSubmit = async () => {
    router.push("/login");
    await logout();
  };

  const args: Props =
    clientID === null
      ? {
          isLoggedIn: false,
        }
      : {
          isLoggedIn: true,
          clientID,
          onLogoutSubmit,
        };

  return <HomePresenter {...args} />;
};

export default Home;
