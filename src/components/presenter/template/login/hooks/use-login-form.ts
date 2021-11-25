import { ChangeEvent, MouseEvent, useCallback } from "react";

type Props = {
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onLoginSubmit: () => void;
  onSignUpSubmit: () => void;
};

export const useLoginFrom = (props: Props) => {
  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onEmailChange(event.target.value);
  };
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onPasswordChange(event.target.value);
  };
  const onLoginSubmit = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onLoginSubmit();
  };
  const onSignUpSubmit = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onSignUpSubmit();
  };

  return {
    onEmailChange: useCallback(onEmailChange, [props]),
    onPasswordChange: useCallback(onPasswordChange, [props]),
    onLoginSubmit: useCallback(onLoginSubmit, [props]),
    onSignUpSubmit: useCallback(onSignUpSubmit, [props]),
  };
};
