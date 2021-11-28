import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoadingPresenter from ".";

export default {
  title: "feedback/loading",
  component: LoadingPresenter,
} as ComponentMeta<typeof LoadingPresenter>;

const TemplateStory: ComponentStory<typeof LoadingPresenter> = (props) => <LoadingPresenter {...props} />;

export const Default = TemplateStory.bind({});
Default.args = {
};