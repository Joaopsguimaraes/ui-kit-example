import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonProps } from "../components/Button";


export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
  color: "blue",
  rounded:"sm",
};

export const Secondary = Template.bind({});

Secondary.args = {
    children: "Button",
    color: "gray",
    variant:"ghost",
    rounded:"none",
}