import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Minimal = Template.bind({});
Minimal.args = {
  children: "Some basic text with no props",
};

export const Sizes = Template.bind({});
Sizes.args = {
  size: "large",
  children: "Text can be sized based on need",
};

export const Weight = Template.bind({});
Weight.args = {
  weight: "strong",
  children: "Text can have different weights",
};
