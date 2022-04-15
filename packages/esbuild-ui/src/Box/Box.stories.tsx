import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "./Box";
import { Button } from "../Button";

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

export const BoxWithSubComponents = Template.bind({});
BoxWithSubComponents.args = {
  Component: "section",
  background: "light",
  padding: "medium",
  children: (
    <>
      <h1>A feature section</h1>
      <h2>With a subheading and a button</h2>
      <Button>Call Now!</Button>
    </>
  ),
};

export const BoxesWithinBoxes = Template.bind({});
BoxesWithinBoxes.args = {
  Component: "section",
  background: "light",
  padding: "medium",
  children: (
    <>
      <h1>Top level Box</h1>
      <p>That contains other boxes within it</p>
      <Box background="primary" padding="medium">
        <h3>This could be used as a callout</h3>
        <Button background="secondary">Call Now!</Button>
      </Box>
    </>
  ),
};
