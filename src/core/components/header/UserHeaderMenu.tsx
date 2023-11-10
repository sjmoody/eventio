import React from "react";
import { Box, Button, Indicator, Menu, Text, Tooltip } from "@mantine/core";
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPencil,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
  IconUser,
  IconUserShield,
} from "@tabler/icons-react";

import { ConditionalWrap as Conditional } from "@/utils/utils";
import { UserAvatar } from "../UserAvatar";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { MenuItemIcon, MenuItemLink } from "../MenuItems";
import { Routes } from "@blitzjs/next";

export const UserHeaderMenu = () => {
  const user = useCurrentUser();
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
        <Menu.Label>Application</Menu.Label>
        <MenuItemIcon Icon={IconSettings}>Settings</MenuItemIcon>
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

        <Menu.Item
          icon={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
