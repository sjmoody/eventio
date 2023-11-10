import Head from "next/head";
import React, { Suspense } from "react";
import { ErrorBoundary, Routes } from "@blitzjs/next";
import { Horizontal, Vertical } from "mantine-layout-components";
import {
  Anchor,
  AppShell,
  Badge,
  Box,
  Button,
  Footer,
  Header,
  Indicator,
  Loader,
  Modal,
  Navbar,
  Text,
  Tooltip,
} from "@mantine/core";
import Link from "next/link";
import { useMutation } from "@blitzjs/rpc";
import logout from "src/features/auth/mutations/logout";
import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";
import { ReactFC } from "~/types";
import { IconUser, IconUserShield } from "@tabler/icons-react";
import { RootErrorFallback } from "../components/RootErrorFallback";
import { useRouter } from "next/router";
import "@uploadthing/react/styles.css";
import { UserAvatar } from "../components/UserAvatar";
import { ConditionalWrap as Conditional } from "@/utils/utils";
import { UserProfileProgress } from "../components/header/UserProfileProgress";
import { OnboardingWizard } from "../components/OnboardingWizard";
import { openContextModal } from "@mantine/modals";
import { GlobalModal } from "@/modals";
import { DarkLightSwitch } from "../components/DarkLightSwitch";
import { UserHeaderMenu } from "../components/header/UserHeaderMenu";

const Layout: ReactFC<{
  title?: string;
  maxWidth?: number;
}> = ({ title, maxWidth = 800, children }) => {
  const thisYear = new Date().getFullYear();
  const [$logout] = useMutation(logout);

  const user = useCurrentUser();

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title || "eventio"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell
        padding="md"
        // navbar={
        //   <Navbar width={{ base: 300 }} height={500} p="xs">
        //     {/* Navbar content */}
        //   </Navbar>
        // }
        header={
          <Header height={55} p="xs">
            <Horizontal fullH spaceBetween fullW>
              <Anchor
                underline={false}
                color="gray.3"
                component={Link}
                href={Routes.Home()}
                fw="bold"
              >
                Eventio
              </Anchor>

              {user && (
                <Horizontal center>
                  <Horizontal center spacing="xs">
                    {/* <Conditional
                      condition={!!user.username}
                      wrap={(children) => {
                        return (
                          <Link
                            href={Routes.ProfilePage({
                              username: user.username as string,
                            })}
                          >
                            {children}
                          </Link>
                        );
                      }}
                    > */}
                    <Horizontal>
                      <UserHeaderMenu />

                      <UserProfileProgress />
                    </Horizontal>

                    <Badge
                      onClick={() => {
                        openContextModal({
                          modal: GlobalModal.becomePro,
                          title: "Become a pro",
                          innerProps: {
                            price: 95,
                          },
                        });
                      }}
                      color="red"
                    >
                      Pro
                    </Badge>
                  </Horizontal>
                  {/* <DarkLightSwitch /> */}
                  {/* <Button
                    size="xs"
                    variant="light"
                    onClick={async () => {
                      await $logout();
                      router.push("/");
                    }}
                  >
                    Logout
                  </Button> */}
                </Horizontal>
              )}
            </Horizontal>
          </Header>
        }
        footer={
          <Footer height={30}>
            <Horizontal fullW fullH center>
              <Text fz="xs" color="dimmed">
                copyright {thisYear}
              </Text>
            </Horizontal>
          </Footer>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        <Vertical fullW fullH>
          <ErrorBoundary resetKeys={[user]} FallbackComponent={RootErrorFallback}>
            <Suspense
              fallback={
                <Vertical center fullH fullW>
                  <Loader />
                </Vertical>
              }
            >
              <Modal
                size="xl"
                centered={true}
                closeOnClickOutside={false}
                closeOnEscape={false}
                withCloseButton={false}
                title="Onboarding modal"
                opened={!user?.onboarded}
                onClose={() => {}}
              >
                <OnboardingWizard />
              </Modal>
              {children}
            </Suspense>
          </ErrorBoundary>
        </Vertical>
      </AppShell>
    </>
  );
};

export default Layout;
