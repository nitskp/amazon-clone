import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Order } from "../../Components";
import sampleItem from "../../Assets/images/sampleItem.jpg";

export default {
  title: "Organisms/Order",
  component: Order,
} as ComponentMeta<typeof Order>;

const Template: ComponentStory<typeof Order> = (args) => <Order {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  returnDate: new Date(Date.now()),
  orders: [
    {
      imageUrl: sampleItem,
      returnDate: new Date(Date.now()),
      title: "Sample Item",
    },
    {
      imageUrl: sampleItem,
      returnDate: new Date(Date.now()),
      title: "Sample Item",
    },
    {
      imageUrl: sampleItem,
      returnDate: new Date(Date.now()),
      title: "Sample Item",
    },
  ],
};
