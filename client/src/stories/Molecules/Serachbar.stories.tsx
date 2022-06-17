import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Searchbar } from "../../Components";

export default {
  title: "Molecules/Searchbar",
  component: Searchbar,
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = (args) => (
  <Searchbar {...args} />
);

export const Default = Template.bind({});

export const IconInside = Template.bind({});
IconInside.args = {
  iconInside: true,
};
