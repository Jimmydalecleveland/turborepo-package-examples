import React from "react";
import { Story, Meta } from "@storybook/react";

import Spacer, { Props } from ".";
import { Button } from "../Button";

export default {
  title: "Components/Spacer",
  component: Spacer,
} as Meta;

const Template: Story<Props> = (args) => (
  <>
    <Button>Don't crowd me!</Button>
    <Spacer {...args} />
    <Button>Ok :)</Button>
  </>
);

export const Minimal = Template.bind({});
// 20px * 20px gap
Minimal.args = {
  size: "medium",
};

// TODO: fix layout to have side by side buttons
export const HorizontalSpacing = Template.bind({});
// 32px * 1px gap
HorizontalSpacing.args = {
  axis: "horizontal",
  size: "large",
};
