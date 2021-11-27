import { ChangeEvent, MouseEvent, useCallback } from "react";

type Props = {
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onLoginSubmit: () => Promise<void>;
  onSignUpSubmit: () => Promise<void>;
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
  const onLoginSubmit = async (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    await props.onLoginSubmit();
  };
  const onSignUpSubmit = async (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    await props.onSignUpSubmit();
  };

  return {
    onEmailChange: useCallback(onEmailChange, [props]),
    onPasswordChange: useCallback(onPasswordChange, [props]),
    onLoginSubmit: useCallback(onLoginSubmit, [props]),
    onSignUpSubmit: useCallback(onSignUpSubmit, [props]),
  };
};
