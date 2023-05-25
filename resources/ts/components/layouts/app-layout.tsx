import { Container, Flex, FlexProps, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface AppLayoutProps extends FlexProps {
  sidebar: ReactNode;
}

export const AppLayout = ({ children, sidebar, ...props }: AppLayoutProps) => {
  return (
    <Flex
      as="section"
      direction={{ base: "column", lg: "row" }}
      height="100vh"
      bg="primary.50"
      overflowY="auto"
      {...props}
    >
      {sidebar}
      <Container py={{ base: 6, lg: 8 }} flex="1" maxW="7xl">
        <Stack spacing={{ base: "8", lg: "6" }}>{children}</Stack>
      </Container>
    </Flex>
  );
};
