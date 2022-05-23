import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonProps } from "../components/Button";


export default {
  // 👇 The title prop is optional.
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Button",
  color: "blue",
  rounded:"sm",
};

export const Secondary = Template.bind({});

Secondary.args = {
    label: "Button",
    color: "blue",
    variant:"outline",
    rounded:"sm",
}