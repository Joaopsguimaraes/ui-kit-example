import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input, InputProps } from "../components/Input";


export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    placeholder:"Lorem ipsum dolor",
    color: "blue",
    variant:"unstyled",
    borderRadius:"xs",
}

