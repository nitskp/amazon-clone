import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Review } from "../../Components";

export default {
  title: "Molecules/Review",
  component: Review,
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />;

export const FullStars = Template.bind({});
FullStars.args = {
  avgReview: 4.8,
};

export const HalfStars = Template.bind({});
HalfStars.args = {
  avgReview: 4.3,
};
