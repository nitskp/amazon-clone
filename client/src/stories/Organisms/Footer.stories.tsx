import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Footer } from "../../Components";

export default {
  title: "Organisms/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

export const SignupFooter = Template.bind({});
SignupFooter.args = {
  signUpFooter: true,
};
