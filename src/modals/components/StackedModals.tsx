import React from "react";
import { Button, Modal } from "@mantine/core";
import { ContextModalProps } from "@mantine/modals";
import { Horizontal, Vertical } from "mantine-layout-components";
import { ReactFC } from "~/types";
import { useBoolean } from "react-hanger";

type InnerProps = {
  price: number;
};

export const StackedModalComponent: ReactFC<ContextModalProps<InnerProps>> = ({
  context,
  id,
  innerProps,
}) => {
  const { price } = innerProps;

  const tellMeMoreOpened = useBoolean(false);

  return (
    <Vertical fullW spacing={15}>
      <Vertical>You can purchase Pro for ${price}</Vertical>
      <Button onClick={tellMeMoreOpened.setTrue}>Tell me more</Button>
      <Modal
        title="more info"
        zIndex={210}
        overlayProps={{ blur: 2 }} // blurs everything below the modal?
        opened={tellMeMoreOpened.value}
        onClose={tellMeMoreOpened.setFalse}
      >
        More information about the Pro plan
      </Modal>
      <Horizontal fullW spaceBetween>
        <Button color="gray" onClick={() => context.closeModal(id)}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            console.log("submit");
          }}
        >
          Submit
        </Button>
      </Horizontal>
    </Vertical>
  );
};
