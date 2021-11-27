import { MouseEvent, useCallback } from "react";

type Props = {
  onLogoutSubmit: () => Promise<void>;
};

export const useLogoutForm = (props: Props) => {
  const onLogoutSubmit = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onLogoutSubmit();
  };

  return useCallback(onLogoutSubmit, [props]);
};
