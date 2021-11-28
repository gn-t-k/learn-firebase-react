import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import HomePresenter from ".";

export default {
  title: "template/home",
  component: HomePresenter,
} as ComponentMeta<typeof HomePresenter>;

const TemplateStory: ComponentStory<typeof HomePresenter> = (props) => (
  <HomePresenter {...props} />
);

export const IsLoggedIn = TemplateStory.bind({});
IsLoggedIn.args = {
  isLoggedIn: true,
  clientID: "clientID",
  logout: () => new Promise(action("logout")),
};

export const IsLoggedOut = TemplateStory.bind({});
IsLoggedOut.args = {
  isLoggedIn: false,
};
