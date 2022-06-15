import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Children } from "react";
import { Text } from "../../Components";

export default {
  title: "Atoms/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Text</Text>
);

export const H1 = Template.bind({});
H1.args = {
  type: "h1",
  color: "#223222",
};

export const H2 = Template.bind({});
H2.args = {
  type: "h2",
  color: "#223222",
};

export const H3 = Template.bind({});
H3.args = {
  type: "h3",
  color: "#223222",
};

export const H4 = Template.bind({});
H4.args = {
  type: "h4",
  color: "#223222",
};

export const H5 = Template.bind({});
H5.args = {
  type: "h5",
  color: "#223222",
};

export const H6 = Template.bind({});
H6.args = {
  type: "h6",
  color: "#223222",
};

export const P = Template.bind({});
P.args = {
  type: "p",
  color: "#223222",
};
