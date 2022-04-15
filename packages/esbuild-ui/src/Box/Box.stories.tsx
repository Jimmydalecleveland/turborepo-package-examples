import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "./Box";

export default {
  title: "Components/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Minimal = Template.bind({});
Minimal.args = {
  padding: "medium",
  children: "A Box Container",
};

export const ChooseComponent = Template.bind({});
ChooseComponent.args = {
  Component: "span",
  children: "This Box wrapper is a span",
};

export const BackgroundColors = Template.bind({});
BackgroundColors.args = {
  background: "primary",
  children: "A Background can be set",
};
