import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Span } from "../../Components";

export default {
  title: "Atoms/Span",
  component: Span,
} as ComponentMeta<typeof Span>;

const Template: ComponentStory<typeof Span> = (args) => <Span {...args} />;

export const Default = Template.bind({});
Default.args = {
  textColor: "tomato",
  fontSize: "24px",
  children: "Default",
};
