import { Avatar, Box, HStack, Text } from "@chakra-ui/react";

interface UserProfileProps {
  name: string;
  image?: string;
  email: string;
}

export const UserProfile = (props: UserProfileProps) => {
  const { name, image, email } = props;

  return (
    <HStack spacing="3" py={2} w="full">
      <Avatar name={name} src={image} boxSize="10" />
      <Box>
        <Text fontWeight="medium" fontSize="sm">
          {name}
        </Text>
        <Text fontSize="sm">{email}</Text>
      </Box>
    </HStack>
  );
};
