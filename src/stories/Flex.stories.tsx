import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Flex, FlexProps } from "../components/Flex";
import { Button } from "../components/Button";

export default {
  title: "Components/Flex",
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children:
    <>
    <Button color="blue">Button</Button>
    <Button color="blue" variant="outline">Button</Button>
    <Button color="indigo" variant="ghost">Button</Button>
    <Button color="indigo">Button</Button>
    </>,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"spaceAround",
    width: "full",
};
