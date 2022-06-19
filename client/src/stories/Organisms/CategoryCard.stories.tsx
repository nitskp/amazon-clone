import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CategoryCard } from "../../Components";
import sampleItem from "../../Assets/images/sampleItem.jpg";

export default {
  title: "Organisms/CategoryCard",
  component: CategoryCard,
} as ComponentMeta<typeof CategoryCard>;

const Template: ComponentStory<typeof CategoryCard> = (args) => (
  <CategoryCard {...args} />
);

export const OneItem = Template.bind({});
OneItem.args = {
  heading: "Category Heading",
  imgs: [
    {
      imgUrl: sampleItem,
      caption: "Sample Categories",
    },
  ],
};

export const FourItems = Template.bind({});
FourItems.args = {
  heading: "Category Heading",
  imgs: [
    {
      imgUrl: sampleItem,
      caption: "Sample Categories",
    },
    {
      imgUrl: sampleItem,
      caption: "Sample Categories",
    },
    {
      imgUrl: sampleItem,
      caption: "Sample Categories",
    },
    {
      imgUrl: sampleItem,
      caption: "Sample Categories",
    },
  ],
};
