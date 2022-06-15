import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Brand } from "../../Components";
import amazonLogo from " ../../Assets/images/Amazon_logo.svg.png";

// need to why it isn't showing in storybook ui
export default {
  title: "Atoms/Brand",
  component: Brand,
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />;

export const Amazon = Template.bind({});
Amazon.args = {
  imgUrl: amazonLogo,
};
