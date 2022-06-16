import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CartHeader } from "../../Components";

export default {
  title: "Molecules/CartHeader",
  component: CartHeader,
} as ComponentMeta<typeof CartHeader>;

export const Default: ComponentStory<typeof CartHeader> = () => <CartHeader />;
