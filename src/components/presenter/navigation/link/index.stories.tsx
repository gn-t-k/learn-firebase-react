import { ComponentMeta, ComponentStory } from "@storybook/react";
import LinkPresenter from ".";

export default {
  title: "navigation/link",
  component: LinkPresenter,
} as ComponentMeta<typeof LinkPresenter>;

const TemplateStory: ComponentStory<typeof LinkPresenter> = (props) => (
  <LinkPresenter {...props}>リンク</LinkPresenter>
);

export const Default = TemplateStory.bind({});
Default.args = {
  path: "path",
};
