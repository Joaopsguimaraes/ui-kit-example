import { css } from "../styles/Theme";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./Button";
import { Flex } from "./Flex";

export const overlay = css({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.2)",
});

export const content = css({
  backgroundColor: "$gray1",
  borderWidth: "$thick",
  borderColor: "$blue12",
  borderStyle: "$solid",
  borderRadius: "$sm",
  boxShadow: "$shadowMd",
  padding: "$4",
  width: 500,
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const title = css({
  fontSize: "$2xl",
  fontFamily: "$roboto",
});

export const description = css({
  fontSize: "$md",
  fontFamily: "$roboto",
  marginY: "1rem",
});

export const button = css({
  width: "auto",
  cursor: "pointer",
  padding: "$1",
  fontSize: "$md",
  fontWeight: "$medium",
  fontFamily: "$roboto",
  variants: {
    color: {
      blue: {
        background: "$blue3",
        color: "$blue11",
        borderColor: "$blue7",
        borderWidth: "$thick",
        borderStyle: "$solid",
        "&:hover , &:focus": {
          background: "$blue5",
          borderColor: "$blue8",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
      },
      gray: {
        background: "$gray3",
        color: "$gray12",
        borderColor: "$gray6",
        borderWidth: "$thick",
        borderStyle: "$solid",
        "&:hover, &:focus": {
          background: "$gray5",
          borderColor: "$gray8",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
      },
      indigo: {
        background: "$indigo3",
        color: "$indigo11",
        borderColor: "$indigo6",
        borderWidth: "$thick",
        borderStyle: "$solid",
        "&:hover, &:focus": {
          background: "$indigo5",
          borderColor: "$indigo8",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
      },
    },
    variant: {
      solid: {},
      outline: {
        background: "none",
      },
      ghost: {
        background: "none",
        fontWeight: "$bold",
        borderRadius: "none",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        "&:hover, &:focus": {
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        },
      },
    },
  },
});

export const buttonClose = css({
  width: "auto",
  cursor: "pointer",
  fontFamily: "$roboto",
  fontWeight: "$medium",
  fontSize: "$md",
  padding: "$2",
  background: "$gray3",
  color: "$gray11",
  borderColor: "$gray6",
  borderWidth: "$thick",
  borderStyle: "$solid",
  borderRadius: "$sm",
  "&:hover, &:focus": {
    background: "$gray5",
    color: "$gray12",
    borderColor: "$gray7",
    borderWidth: "$thick",
    borderStyle: "$solid",
    transition: "$true",
  },
  variants: {
    size: {
      sm: {
        width: "$auto",
        padding: "$1",
        fontSize: "$sm",
      },
      lg: {
        width: "$auto",
        padding: "$3",
        fontSize: "$lg",
      },
      xlg: {
        width: "$auto",
        padding: "$4",
        fontSize: "$xl",
      },
    },
  },
});

export interface DialogModalProps {
  titleDialog: string;
  descriptionDialog: string;
  buttonTextDialog: string;
  firstOptionDialog: string;
  closeOptionDialog: string;
}

export function DialogModal({
  titleDialog,
  descriptionDialog,
  buttonTextDialog,
  firstOptionDialog,
  closeOptionDialog,
}: DialogModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={button({ color: "blue", variant: "outline" })}>
        {buttonTextDialog}
      </Dialog.Trigger>
      <Dialog.Overlay className={overlay()} />
      <Dialog.Content className={content()}>
        <Dialog.Title className={title()}>{titleDialog}</Dialog.Title>
        <Dialog.Description className={description()}>
          {descriptionDialog}
        </Dialog.Description>
        <Flex alignItems="center" justifyContent="end" gap="sm">
          <Button color="blue" rounded="sm" size="sm">
            {firstOptionDialog}
          </Button>
          <Dialog.Close className={buttonClose({ size: "sm" })}>
            {closeOptionDialog}
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
