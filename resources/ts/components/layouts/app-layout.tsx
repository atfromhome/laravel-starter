import { Box, chakra, Flex, FlexProps } from "@chakra-ui/react";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { Topbar } from "./topbar";

interface AppLayoutProps extends FlexProps {
  children: React.ReactNode;
  sidebar?: boolean;
  topbar?: boolean;
}

function AppLayout({ children, sidebar = true, topbar, ...props }: AppLayoutProps) {
  return (
    <Flex
      as="main"
      direction={{ base: "column", lg: topbar ? "column" : "row" }}
      height="100vh"
      bg="primary.50"
      {...props}
    >
      <Navbar hideFrom="lg" />
      {topbar && <Topbar hideBelow="lg" />}
      {sidebar && <Sidebar hideBelow="lg" />}
      <Box overflowY="auto" maxWidth="full" width="full">
        {children}
      </Box>
    </Flex>
  );
}

export const AppSidebarLayout = (props: Omit<AppLayoutProps, "sidebar" | "topbar">) => (
  <AppLayout sidebar {...props} />
);

export const AppTopbarLayout = (props: Omit<AppLayoutProps, "sidebar" | "topbar">) => (
  <AppLayout sidebar={false} topbar {...props} />
);
