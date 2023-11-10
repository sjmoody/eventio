import React from "react";
import { Box, Button, Indicator, Menu, Text, Tooltip } from "@mantine/core";
import {
  IconLogout,
  IconPencil,
  IconSettings,
  IconUser,
  IconUserShield,
} from "@tabler/icons-react";

import { ConditionalWrap as Conditional } from "@/utils/utils";
import { UserAvatar } from "../UserAvatar";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { MenuItemIcon, MenuItemLink } from "../MenuItems";
import { Routes } from "@blitzjs/next";
import { useMutation } from "@blitzjs/rpc";
import logout from "@/features/auth/mutations/logout";
import { useRouter } from "next/router";

export const UserHeaderMenu = () => {
  const user = useCurrentUser();
  const [$logout] = useMutation(logout);
  const router = useRouter();

  if (!user) return null;

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Box sx={{ cursor: "pointer" }}>
          <Conditional
            condition={user.isAdmin}
            wrap={(children) => (
              <Indicator
                color="none"
                position="bottom-end"
                label={
                  <Tooltip color="dark" label="Admin">
                    <Box>
                      <IconUserShield size={13} />
                    </Box>
                  </Tooltip>
                }
              >
                {children}
              </Indicator>
            )}
          >
            <UserAvatar user={user} />
          </Conditional>
        </Box>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>

        <MenuItemLink Icon={IconSettings} href={Routes.SettingsPage()}>
          Settings
        </MenuItemLink>
        <MenuItemLink Icon={IconPencil} href={Routes.EditProfilePage()}>
          Edit Profile
        </MenuItemLink>
        {user.username && (
          <MenuItemLink
            Icon={IconUser}
            href={Routes.ProfilePage({
              username: user.username,
            })}
          >
            View Profile
          </MenuItemLink>
        )}

        <Menu.Divider />
        <MenuItemIcon
          Icon={IconLogout}
          onClick={async () => {
            await $logout();
            router.push("/");
          }}
          color="red.3"
        >
          Log Out
        </MenuItemIcon>
      </Menu.Dropdown>
    </Menu>
  );
};
