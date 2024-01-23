import { Box, Container, HStack, LayoutProps, Stack, Text } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import React from "react";

export interface AppPageProps extends Pick<LayoutProps, "width"> {
  title: string;
  subtitle?: string;
  action?: React.ReactElement;
  children?: React.ReactNode;
}

export const AppPage = ({ width = "full", ...props }: AppPageProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Box flex="1">
        <Box height="full" bg="white" overflowY="auto">
          <Container p="8" flex="1" width={width} maxW="8xl">
            <Stack spacing={{ base: "8", lg: "6" }}>
              <Stack
                spacing="4"
                direction={{ base: "column", lg: "row" }}
                justify="space-between"
                align={{ base: "start", lg: "center" }}
              >
                <Stack spacing="1">
                  <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="medium">
                    {props.title}
                  </Text>
                  <Text color="stale.400" fontSize={{ base: "md", lg: "lg" }}>
                    {props.subtitle}
                  </Text>
                </Stack>
                <HStack spacing="3">{props.action}</HStack>
              </Stack>
              {props.children}
            </Stack>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};
