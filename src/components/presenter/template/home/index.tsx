import styles from "./index.module.css";
import { useLogoutForm } from "./hooks/use-logout-form";
import Link from "components/presenter/navigation/link";

type LoggedInProps = {
  isLoggedIn: true;
  clientID: string;
  onLogoutSubmit: () => Promise<void>;
};

type LoggedOutProps = {
  isLoggedIn: false;
};

export type Props = LoggedInProps | LoggedOutProps;

const HomePresenter = (props: Props): JSX.Element =>
  props.isLoggedIn ? <LoggedInHome {...props} /> : <LoggedOutHome />;

const LoggedInHome = (props: LoggedInProps) => {
  const onLogoutSubmit = useLogoutForm({
    onLogoutSubmit: props.onLogoutSubmit,
  });

  return (
    <>
      <p>id: {props.clientID}</p>
      <form>
        <input type="submit" value="ログアウト" onClick={onLogoutSubmit} />
      </form>
    </>
  );
};

const LoggedOutHome = () => <Link path="/login">ログイン/新規登録ページ</Link>;

export default HomePresenter;
