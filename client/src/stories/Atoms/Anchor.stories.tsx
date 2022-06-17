import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Anchor } from "../../Components";

export default {
  title: "Atoms/Anchor",
  component: Anchor,
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => (
  <Anchor {...args}>Hello</Anchor>
);

export const Default = Template.bind({});
Default.args = {
  to: "#",
};
