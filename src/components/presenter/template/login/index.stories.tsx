import { useState } from "@storybook/addons";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoginPresenter from ".";

export default {
  title: "template/login",
  component: LoginPresenter,
} as ComponentMeta<typeof LoginPresenter>;

const TemplateStory: ComponentStory<typeof LoginPresenter> = (props) => {
  const { isProcessing, errorMessage } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmailChange = (value: string) => {
    action(value)();
    setEmail(value);
  };
  const onPasswordChange = (value: string) => {
    action(value)();
    setPassword(value);
  };
  const onLoginSubmit = (): Promise<void> => new Promise(action("login"));
  const onSignUpSubmit = (): Promise<void> => new Promise(action("sign up"));

  return (
    <LoginPresenter
      {...{
        email,
        onEmailChange,
        isProcessing,
        errorMessage,
        password,
        onPasswordChange,
        onLoginSubmit,
        onSignUpSubmit,
      }}
    />
  );
};

export const Default = TemplateStory.bind({});
Default.args = {
  isProcessing: false,
  errorMessage: null,
};

export const OnProcessing = TemplateStory.bind({});
OnProcessing.args = {
  isProcessing: true,
  errorMessage: null,
};

export const OnError = TemplateStory.bind({});
OnError.args = {
  isProcessing: false,
  errorMessage: "エラーメッセージ",
};
