import { Loader } from "@mantine/core";
import { Vertical } from "mantine-layout-components";
import React from "react";

export const FullPageLoader = () => {
  return (
    <Vertical mih="100vh" miw="100vh" fullH fullW center>
      <Loader />
    </Vertical>
  );
};
