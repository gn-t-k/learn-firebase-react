import { useState } from "@storybook/addons";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Login from ".";

export default {
  title: "template/login",
  component: Login,
} as ComponentMeta<typeof Login>;

const TemplateStory: ComponentStory<typeof Login> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmailChange = (value: string) => {
    action(value);
    setEmail(value);
  };
  const onPasswordChange = (value: string) => {
    action(value);
    setPassword(value);
  };

  return (
    <Login
      {...{
        email,
        onEmailChange,
        password,
        onPasswordChange,
        onLoginSubmit: props.onLoginSubmit,
        onSignUpSubmit: props.onSignUpSubmit,
      }}
    />
  );
};

export const Default = TemplateStory.bind({});
Default.args = {
  onLoginSubmit: action("login"),
  onSignUpSubmit: action("sign up"),
};
