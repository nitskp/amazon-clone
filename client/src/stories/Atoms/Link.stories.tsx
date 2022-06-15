import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StyledLink } from "../../Components";

// need to resolve this error too. Maybe this will occur for all external lib ones
export default {
  title: "Atoms/StyledLink",
  component: StyledLink,
} as ComponentMeta<typeof StyledLink>;

const Template: ComponentStory<typeof StyledLink> = (args) => (
  <StyledLink {...args}>Link</StyledLink>
);

export const Default = Template.bind({});
Default.args = {
  to: "/",
};
