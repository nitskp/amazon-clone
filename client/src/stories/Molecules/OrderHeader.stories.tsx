import { ComponentMeta, ComponentStory } from "@storybook/react";
import { OrderHeader } from "../../Components";
import { GlobalStyles } from "../../Components/GlobalStyles";

export default {
  title: "Molecules/OrderHeader",
  component: OrderHeader,
} as ComponentMeta<typeof OrderHeader>;

const Template: ComponentStory<typeof OrderHeader> = (args) => (
  <>
    <GlobalStyles /> <OrderHeader {...args} />
  </>
);

export const Sample = Template.bind({})
Sample.args = {
    orderId: '10820280243',
    dateOrdered: new Date(Date.now()),
    totalCost: 12243,
    shippingAddress: 'toot-tip containing address',
    orderDetails: 'need to place link with order-details',
    invoice: 'sample invoice url'

}