import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "../../Components";

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// need to see how to use storybook in this case (using react-hook-form lib)
// export const Text = Template.bind({})
// Text.args = {
//     type: "tel",
//     register:
// }
