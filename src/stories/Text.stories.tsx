import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text, TextProps } from "../components/Text";

export default {
  // 👇 The title prop is optional.
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Lorem Ipsum",
  fontFamily: "robot",
  size:"md"
};

export const Secondary = Template.bind({});

Secondary.args = {
    label: "Lorem Ipsum",
    fontFamily: "poppins",
    size: "lg",
    bold:"true"

}