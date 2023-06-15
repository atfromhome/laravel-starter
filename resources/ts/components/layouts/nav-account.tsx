import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Icon,
  Img,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  useMenuButton
} from "@chakra-ui/react";
import { Link, useForm } from "@inertiajs/react";
import { ChevronsUpDown } from "lucide-react";
import { useUser } from "~/hooks";

export const NavAccountButton = (props: FlexProps) => {
  const user = useUser();
  const buttonProps = useMenuButton(props);

  return (
    <Flex
      as="button"
      {...buttonProps}
      w="full"
      display="flex"
      alignItems="center"
      rounded="lg"
      bg="stale.500"
      px="4"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: "slate.600" }}
      _focus={{ shadow: "outline", boxShadow: "none" }}
    >
      <HStack flex="1" spacing="3">
        <Img w="8" h="8" rounded="md" objectFit="cover" src="/avatar.png" alt="Nama User" />
        <Box textAlign="start">
          <Box noOfLines={1} fontWeight="semibold">
            {user?.name}
          </Box>
          <Box fontSize="xs" color="gray.400">
            {user?.email}
          </Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <Icon as={ChevronsUpDown} />
      </Box>
    </Flex>
  );
};

export const NavAccount = () => {
  const form = useForm();

  return (
    <Menu matchWidth>
      <NavAccountButton />
      <MenuList shadow="lg" py="4" color={useColorModeValue("stale.500", "stale.200")} px="3">
        <MenuItem rounded="md" as={Link} href="/profile">
          My Profile
        </MenuItem>
        <MenuDivider />
        <MenuItem
          rounded="md"
          onClick={(e) => {
            e.preventDefault();

            form.post("/logout");
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
