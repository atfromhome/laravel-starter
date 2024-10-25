import { Card, CardRootProps, Center, ContainerProps, HStack, Stack, Text } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import React from "react";

export interface AppPageProps extends CardRootProps {
  title: string;
  subtitle?: string;
  action?: React.ReactElement;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

export const AppPage = ({
  children,
  title,
  subtitle,
  action,
  fullWidth = true,
  ...props
}: AppPageProps) => {
  const { width, w, ...rest } = props;

  const isHasWidth = width !== undefined || w !== undefined;
  const widthPropValue = isHasWidth ? width || w : fullWidth ? "full" : undefined;

  return (
    <Center>
      <Head>
        <title>{title}</title>
      </Head>
      <Card.Root
        my={{ base: 0, lg: "2" }}
        mx={{ base: 0, lg: "2" }}
        width={widthPropValue}
        w={widthPropValue}
        {...rest}
      >
        <Card.Header pb={0} pt={2} px={4}>
          <Stack
            gap="4"
            justify="space-between"
            direction={{ base: "column", lg: "row" }}
            align={{ base: "start", lg: "center" }}
          >
            <Stack gap="1">
              <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="medium">
                {title}
              </Text>
              <Text color="primary.400" fontSize={{ base: "md", lg: "lg" }}>
                {subtitle}
              </Text>
            </Stack>
            <HStack gap="3">{action}</HStack>
          </Stack>
        </Card.Header>
        <Card.Body px={4}>{children}</Card.Body>
      </Card.Root>
    </Center>
  );
};
