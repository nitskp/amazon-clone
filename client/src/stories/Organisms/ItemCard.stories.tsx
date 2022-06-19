import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ItemCard } from "../../Components";
import sampleItem from "../../Assets/images/sampleItem.jpg";

export default {
  title: "Organisms/ItemCard",
  component: ItemCard,
} as ComponentMeta<typeof ItemCard>;

const Template: ComponentStory<typeof ItemCard> = (args) => (
  <ItemCard {...args} />
);

export const Sample = Template.bind({});
Sample.args = {
  itemImg: sampleItem,
  itemTitle: "Sample Item",
  price: 2112,
  discountInPercent: 10,
  avgReview: 3.2,
  noOfReviews: 13234,
};
