import Head from "next/head";
import React, { Suspense } from "react";
import { ErrorBoundary, Routes } from "@blitzjs/next";
import { Horizontal, Vertical } from "mantine-layout-components";
import { Anchor, AppShell, Badge, Footer, Header, Loader, Text } from "@mantine/core";
import Link from "next/link";

import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";
import { ReactFC } from "~/types";

import { RootErrorFallback } from "../components/RootErrorFallback";
import { useRouter } from "next/router";
import "@uploadthing/react/styles.css";

import { UserHeaderMenu } from "../components/header/UserHeaderMenu";

const Layout: ReactFC<{
  title?: string;
  maxWidth?: number;
}> = ({ title, maxWidth = 800, children }) => {
  const thisYear = new Date().getFullYear();

  const user = useCurrentUser();

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title || "RemoteMartechJobs.com"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell
        padding="md"
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
                Remote Martech Jobs
              </Anchor>

              {user && (
                <Horizontal center>
                  <Horizontal center spacing="xs">
                    <Horizontal>
                      <UserHeaderMenu />
                    </Horizontal>
                  </Horizontal>
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
              {children}
            </Suspense>
          </ErrorBoundary>
        </Vertical>
      </AppShell>
    </>
  );
};

export default Layout;
