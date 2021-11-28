import { AuthContext } from "components/function/auth-context";
import LoadingPresenter from "components/presenter/feedback/loading";
import HomePresenter, { Props } from "components/presenter/template/home";
import { useContext } from "react";
import { useLogout } from "./hooks/use-logout";

const Home = () => {
  const auth = useContext(AuthContext);
  const logout = useLogout();

  if (auth.loginStatus === "unknown") {
    return <LoadingPresenter />;
  }

  const args: Props =
    auth.loginStatus === "loggedIn"
      ? {
          isLoggedIn: true,
          clientID: auth.clientID,
          logout,
        }
      : {
          isLoggedIn: false,
        };

  return <HomePresenter {...args} />;
};

export default Home;
