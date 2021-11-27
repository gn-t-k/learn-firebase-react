import { useRouter } from "components/hooks/use-router";
import { MouseEvent, ReactNode } from "react";
import styles from "./index.module.css";

type Props = {
  children: ReactNode;
  path: string;
};

const LinkPresenter = ({ children, path }: Props): JSX.Element => {
  const router = useRouter();
  const linkTo = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push(path);
  };

  return (
    <span className={styles["link"]}>
      <a href={path} onClick={linkTo}>
        {children}
      </a>
    </span>
  );
};

export default LinkPresenter;
