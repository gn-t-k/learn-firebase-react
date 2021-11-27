import { AuthContext } from "components/function/auth-context-provider";
import HomePresenter, { Props } from "components/presenter/template/home";
import { useContext } from "react";
import { useLogout } from "./hooks/use-logout";
import { useRouter } from "./hooks/use-router";

const Home = () => {
  const { clientID } = useContext(AuthContext);
  const router = useRouter();
  const linkToLoginPage = () => {
    router.push("/login");
  };
  const onLogoutSubmit = useLogout();
  const args: Props =
    clientID === null
      ? {
          isLoggedIn: false,
          linkToLoginPage,
        }
      : {
          isLoggedIn: true,
          clientID,
          onLogoutSubmit,
        };

  return (
    <>
      <HomePresenter {...args} />
    </>
  );
};

export default Home;
