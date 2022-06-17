import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListofLinks } from "../../Components";

export default {
  title: "Molecules/ListofLinks",
  component: ListofLinks,
} as ComponentMeta<typeof ListofLinks>;

const Template: ComponentStory<typeof ListofLinks> = (args) => (
  <ListofLinks {...args} />
);

export const Sample = Template.bind({});
Sample.args = {
  heading: "Heading",
  links: [
    { name: "link1", url: "#" },
    { name: "link2", url: "#" },
    { name: "link3", url: "#" },
    { name: "link4", url: "#" },
  ],
};
