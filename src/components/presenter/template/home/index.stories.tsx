import { ComponentMeta, ComponentStory } from "@storybook/react";
import HomePresenter from ".";

export default {
  title: "template/home",
  component: HomePresenter,
} as ComponentMeta<typeof HomePresenter>;

const TemplateStory: ComponentStory<typeof HomePresenter> = (props) => <HomePresenter {...props} />;

export const Default = TemplateStory.bind({});
Default.args = {
};