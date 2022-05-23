import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input, InputProps } from "../components/Input";


export default {
  // 👇 The title prop is optional.
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    placeholder:"Lorem ipsum dolor",
    color: "blue",
    variant:"unstyled",
    borderRadius:"xs",
}

