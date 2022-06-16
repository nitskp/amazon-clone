import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Searchbar } from "../../Components";

export default {
  title: "Molecules/Searchbar",
  component: Searchbar,
} as ComponentMeta<typeof Searchbar>;

export const Default: ComponentStory<typeof Searchbar> = () => <Searchbar />;
