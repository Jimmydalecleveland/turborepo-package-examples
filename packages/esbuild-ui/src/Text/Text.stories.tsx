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

// TODO: add stack to space these out when it's implimented
export const Sizes: React.FC = () => (
  <section>
    <Text size="small">Text can be `small`</Text>
    <br />
    <Text size="medium">Text can be `medium`</Text>
    <br />
    <Text size="large">Text can be `large`</Text>
    <br />
  </section>
);

export const Weight = Template.bind({});
Weight.args = {
  weight: "strong",
  children: "Text can have different weights",
};
