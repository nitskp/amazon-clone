import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImageGallery } from "../../Components";
import sampleItem from "../../Assets/images/sampleItem.webp";
import sampleItem2 from "../../Assets/images/sampleItem.jpg";
import { GlobalStyles } from "../../Components/GlobalStyles";

export default {
  title: "Organisms/ImageGallery",
  component: ImageGallery,
} as ComponentMeta<typeof ImageGallery>;

const Template: ComponentStory<typeof ImageGallery> = (args) => (
  <>
    <GlobalStyles />
    <ImageGallery {...args} />
  </>
);

export const Sample = Template.bind({});
Sample.args = {
  imgs: [sampleItem, sampleItem, sampleItem2, sampleItem],
};
