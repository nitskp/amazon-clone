import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImageWithText } from "../../Components";
import sampleItem from "../../Assets/images/sampleItem.jpg";

export default {
  title: "Molecules/ImageWithText",
  component: ImageWithText,
} as ComponentMeta<typeof ImageWithText>;

const Template: ComponentStory<typeof ImageWithText> = (args) => (
  <ImageWithText {...args} />
);

export const Sample = Template.bind({});
Sample.args = {
  imgUrl: sampleItem,
  text: "Helmets",
};
