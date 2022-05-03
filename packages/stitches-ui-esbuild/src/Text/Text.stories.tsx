import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";
// import { Spacer } from "../Spacer";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Minimal = Template.bind({});
Minimal.args = {
  children: "Some basic text with no props",
};

export const Sizes = () => (
  <section>
    <Text size="small">Text can be `small`</Text>
    {/* <Spacer size="small" /> */}
    <Text size="medium">Text can be `medium`</Text>
    {/* <Spacer size="small" /> */}
    <Text size="large">Text can be `large`</Text>
    {/* <Spacer size="small" /> */}
  </section>
);

export const Weight = Template.bind({});
Weight.args = {
  weight: "strong",
  children: "Text can have different weights",
};
