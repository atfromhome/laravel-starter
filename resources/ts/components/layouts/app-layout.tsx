import {
  Box,
  Flex,
  FlexProps,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";

interface AppLayoutProps extends FlexProps {
  children: React.ReactNode;
}

export function AppLayout({ children, ...props }: AppLayoutProps) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      as="main"
      direction={{ base: "column", lg: "row" }}
      height="100vh"
      overflowY="auto"
    >
      {isDesktop ? <Sidebar /> : <Navbar />}
      {children}
    </Flex>
  );
}
