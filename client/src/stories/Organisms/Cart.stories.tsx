import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Cart } from "../../Components";

export default {
  title: "Organisms/Cart",
  component: Cart,
} as ComponentMeta<typeof Cart>;

export const Sample: ComponentStory<typeof Cart> = () => <Cart />;
