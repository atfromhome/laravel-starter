import { Heading, Stack, StackProps, Text, useBreakpointValue } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import { Navbar } from "./navbar";
import { ReactNode, useMemo } from "react";
import { AppLayout } from "./app-layout";
import { Sidebar } from "./sidebar";
import { appMenus, settingMenus } from "./menus";

export type AppPageProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  settingPage?: boolean;
} & StackProps;

export const AppPage = ({
  title,
  subtitle,
  action,
  settingPage = false,
  children,
  ...props
}: AppPageProps) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const menus = useMemo(() => (settingPage ? settingMenus : appMenus), [settingPage]);

  return (
    <AppLayout
      sidebar={
        isDesktop ? (
          <Sidebar settingPage={settingPage} menus={menus} />
        ) : (
          <Navbar settingPage={settingPage} menus={menus} />
        )
      }
    >
      <Stack
        spacing="4"
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align={{ base: "start", lg: "center" }}
        {...props}
      >
        <Head>
          <title>{title}</title>
        </Head>
        <Stack spacing="1">
          <Heading size={{ base: "lg" }} fontWeight="semibold">
            {title}
          </Heading>
          <Text color="muted">{subtitle}</Text>
        </Stack>
        {action}
      </Stack>
      {children}
    </AppLayout>
  );
};
