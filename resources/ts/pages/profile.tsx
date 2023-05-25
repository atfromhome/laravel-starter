import { Box, SimpleGrid, Stack, StackDivider, Text } from "@chakra-ui/react";
import { AppPage } from "~/components";
import { UseUserReturn } from "~/hooks";
import { PersonalInfoCard, UpdatePasswordCard } from "~/views";

type PageProps = {
  user: UseUserReturn;
};

const Page = ({ user, ...props }: PageProps) => {
  return (
    <AppPage settingPage title="Profile">
      <Stack spacing="6" divider={<StackDivider borderColor="primary.100" />}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "5", lg: "8" }}>
          <Box flexShrink={0}>
            <Text fontSize="lg" fontWeight="medium">
              Personal Information
            </Text>
            <Text color="muted" fontSize="sm">
              Update your account profile information and email address
            </Text>
          </Box>
          <PersonalInfoCard user={user as UseUserReturn} maxW={{ lg: "3xl" }} />
        </SimpleGrid>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "5", lg: "8" }}
          justify="space-between"
        >
          <Box flexShrink={0}>
            <Text fontSize="lg" fontWeight="medium">
              Personal Information
            </Text>
            <Text color="muted" fontSize="sm">
              Update your account profile information and email address
            </Text>
          </Box>
          <PersonalInfoCard user={user as UseUserReturn} maxW={{ lg: "3xl" }} />
        </Stack>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "5", lg: "8" }}
          justify="space-between"
        >
          <Box flexShrink={0}>
            <Text fontSize="lg" fontWeight="medium">
              Update Password
            </Text>
            <Text color="muted" fontSize="sm">
              Ensure your account is using a long, random password to stay secure
            </Text>
          </Box>
          <UpdatePasswordCard maxW={{ lg: "3xl" }} />
        </Stack>
      </Stack>
    </AppPage>
  );
};

export default Page;
