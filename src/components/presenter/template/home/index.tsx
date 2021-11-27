import styles from "./index.module.css";
import { useLogoutForm } from "./hooks/use-logout-form";

type LoggedInProps = {
  isLoggedIn: true;
  clientID: string;
  onLogoutSubmit: () => Promise<void>;
};

type LoggedOutProps = {
  isLoggedIn: false;
  linkToLoginPage: () => void;
};

export type Props = LoggedInProps | LoggedOutProps;

const HomePresenter = (props: Props): JSX.Element =>
  props.isLoggedIn ? <LoggedInHome {...props} /> : <LoggedOutHome {...props} />;

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

const LoggedOutHome = (props: LoggedOutProps) => (
  <span className={styles["link"]}>
    <a onClick={props.linkToLoginPage}>ログイン/新規登録ページ</a>
  </span>
);

export default HomePresenter;
