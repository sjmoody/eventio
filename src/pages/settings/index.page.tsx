import React from "react";
import Layout from "@/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import { Vertical } from "mantine-layout-components";
import { Tabs, Text } from "@mantine/core";
import { IconMail, IconSettings, IconUserCog } from "@tabler/icons-react";
import { ChangePassword } from "./components/ChangePassword";

export const SettingsPage: BlitzPage = () => {
  return (
    <Layout>
      <Vertical fullW>
        <Tabs w="100%" orientation="vertical" defaultValue="account">
          <Tabs.List>
            <Tabs.Tab value="account" icon={<IconUserCog size="0.8rem" />}>
              Account
            </Tabs.Tab>
            <Tabs.Tab value="email" icon={<IconMail size="0.8rem" />}>
              Email
            </Tabs.Tab>
            <Tabs.Tab value="profile" icon={<IconSettings size="0.8rem" />}>
              Profile
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="account" pt="xs">
            Account
            <ChangePassword />
          </Tabs.Panel>

          <Tabs.Panel value="email" pt="xs">
            Email
          </Tabs.Panel>

          <Tabs.Panel value="profile" pt="xs">
            Profile
          </Tabs.Panel>
        </Tabs>
      </Vertical>
    </Layout>
  );
};

export default SettingsPage;
