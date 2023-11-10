import React from "react";
import { Button } from "@mantine/core";
import { ContextModalProps } from "@mantine/modals";
import { Horizontal, Vertical } from "mantine-layout-components";
import { ReactFC } from "~/types";

type InnerProps = {
  price: number;
};

export const BecomeProModalComponent: ReactFC<ContextModalProps<InnerProps>> = ({
  context,
  id,
  innerProps,
}) => {
  const { price } = innerProps;

  const handleCloseModal = () => context.closeModal(id);

  return (
    <Vertical fullW spacing={15}>
      <Vertical>You can purchase Pro for ${price}</Vertical>
      <Horizontal fullW spaceBetween>
        <Button color="gray" onClick={handleCloseModal}>
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
