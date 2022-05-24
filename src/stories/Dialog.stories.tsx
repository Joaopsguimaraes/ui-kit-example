import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DialogModal } from "../components/Dialog";

export default{
    title: "Components/Dialog",
    component: DialogModal,

} as ComponentMeta<typeof DialogModal>;

const Template: ComponentStory<typeof DialogModal> = (args) => <DialogModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    buttonTextDialog:"Open",
    titleDialog:"Title Lorem Ips",
    descriptionDialog:"Lorem Ipsum dolor sit amet, consectetur adip", 
    firstOptionDialog:"SEND",
    closeOptionDialog:"CLOSE"   
};
