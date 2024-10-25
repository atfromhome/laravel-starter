import { Box, GridItem, SimpleGrid, Stack, StackSeparator, Text } from "@chakra-ui/react";
import { AppPage } from "~/components";
import { UseUserReturn } from "~/hooks";
import { PersonalInfoCard, UpdatePasswordCard } from "~/views";

type PageProps = {
  user: UseUserReturn;
};

const Page = ({ user }: PageProps) => {
  return (
    <AppPage title="Profile">
      <Stack gap="6" separator={<StackSeparator borderColor="primary.100" />}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={{ base: "5", lg: "8" }}>
          <Box flexShrink={0}>
            <Text fontSize="lg" fontWeight="medium">
              Personal Information
            </Text>
            <Text color="muted" fontSize="sm">
              Update your account profile information and email address
            </Text>
          </Box>
          <GridItem colSpan={2}>
            <PersonalInfoCard user={user as UseUserReturn} maxW={{ lg: "full" }} />
          </GridItem>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={{ base: "5", lg: "8" }}>
          <Box flexShrink={0}>
            <Text fontSize="lg" fontWeight="medium">
              Update Password
            </Text>
            <Text color="muted" fontSize="sm">
              Ensure your account is using a long, random password to stay secure
            </Text>
          </Box>
          <GridItem colSpan={2}>
            <UpdatePasswordCard maxW={{ lg: "full" }} />
          </GridItem>
        </SimpleGrid>
      </Stack>
    </AppPage>
  );
};

export default Page;
