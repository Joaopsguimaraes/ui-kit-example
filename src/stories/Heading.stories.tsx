import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading, HeadingProps } from "../components/Heading";

export default {
  title: "Components/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: "Lorem Ipsum",
    size: "lg",
    textAlign:"center",
    bold:"false"
};

export const Secondary = Template.bind({});

Secondary.args = {
    children: "Lorem Ipsum",
    size: "xlg",
    color: "blue",
    textAlign:"center",
    bold:"true"
};

export const Small = Template.bind({});

Small.args = {
    children: "Lorem Ipsum",
    size: "sm",
}