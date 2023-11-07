import React from "react";
import Layout from "@/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import { Vertical } from "mantine-layout-components";
import { Text } from "@mantine/core";
import { useStringQueryParam } from "@/utils/utils";

export const VerifyEmailPage: BlitzPage = () => {
  const token = useStringQueryParam("token");

  return (
    <Layout>
      <Vertical>
        <Text>Your email verification token is {token}</Text>
      </Vertical>
    </Layout>
  );
};

export default VerifyEmailPage;
