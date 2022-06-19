import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Navbar } from "../../Components";

export default {
  title: "Organisms/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Sample: ComponentStory<typeof Navbar> = () => <Navbar />;
