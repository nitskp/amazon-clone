import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Carousel } from "../../Components";
import amazonBackground from "../../Assets/images/amazonBackground.jpg";
import amazonBackground2 from "../../Assets/images/amazonBackground2.jpg";
import amazonBackground3 from "../../Assets/images/amazonBackground3.jpg";

export default {
  title: "Molecules/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const Sample = Template.bind({});
Sample.args = {
  imgUrls: [amazonBackground, amazonBackground2, amazonBackground3],
};
