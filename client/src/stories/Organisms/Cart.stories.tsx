import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CartCard } from "../../Components";

export default {
  title: "Organisms/CartCard",
  component: CartCard,
} as ComponentMeta<typeof CartCard>;

export const Sample: ComponentStory<typeof CartCard> = () => <CartCard />;
