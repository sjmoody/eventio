import React from "react";
import Layout from "@/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import { Vertical } from "mantine-layout-components";
import { Button, Text } from "@mantine/core";
import { useStringParam } from "@/utils/utils";
import { useQuery } from "@blitzjs/rpc";
import getUserForProfile from "@/features/users/queries/getUserForProfile";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";

export const ProfilePage: BlitzPage = () => {
  const username = useStringParam("username");
  const [user] = useQuery(getUserForProfile, { username: username || "" }, { enabled: !!username });

  const currentUser = useCurrentUser();
  const isOwner = currentUser?.id === user?.id;

  if (!user) return <Text>User not found :o </Text>;

  return (
    <Layout>
      <Vertical>
        {isOwner && <Button>Edit profile</Button>}
        <Text>Hello {user.name}</Text>
        <Text>{user.bio}</Text>
      </Vertical>
    </Layout>
  );
};

export default ProfilePage;
