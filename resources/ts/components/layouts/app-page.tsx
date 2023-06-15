import { Box, Container, HStack, Stack, Text } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import React, { useMemo } from "react";

export interface AppPageProps {
  title: string;
  subtitle?: string;
  action?: React.ReactElement;
  children?: React.ReactNode;
}

export const AppPage = (props: AppPageProps) => {
  const title = useMemo(() => `${props.title} - Laravel`, [props.title]);

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Box bg="stale.600" pt={{ base: "0", lg: "3" }} flex="1">
        <Box
          height="full"
          bg="stale.50"
          borderTopLeftRadius={{ base: "none", lg: "2rem" }}
          overflowY="auto"
        >
          <Container p="8" flex="1" maxW="7xl">
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
