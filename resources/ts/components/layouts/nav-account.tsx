import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Icon,
  Image,
  Menu,
  MenuItem,
  MenuItemProps
} from "@chakra-ui/react";
import { InertiaLinkProps, Link, useForm } from "@inertiajs/react";
import { ChevronsUpDown } from "lucide-react";
import { useUser } from "~/hooks";
import { MenuContent, MenuRoot } from "../ui/menu";

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
      px="4"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      border="1px"
      borderColor="stale.100"
      transition="all 0.2s"
      _focus={{ shadow: "outline", boxShadow: "none" }}
    >
      <HStack flex="1" gap="3">
        <Image w="8" h="8" rounded="md" objectFit="cover" src="/avatar.png" alt="Nama User" />
        <Box textAlign="start">
          <Box fontWeight="semibold">{user?.name}</Box>
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

const NavAccountItem = (
  props: Omit<MenuItemProps, "children"> & { label: string } & Partial<Omit<InertiaLinkProps, "as">>
) => (
  <MenuItem
    rounded="md"
    {...props}
    _hover={{ bg: "primary.600", color: "white" }}
    _active={{ bg: "primary.600", color: "white" }}
    _focus={{ bg: "primary.600", color: "white" }}
  >
    {props.label}
  </MenuItem>
);

export const NavAccount = () => {
  const form = useForm();

  return (
    <MenuRoot matchWidth>
      <NavAccountButton />
      <MenuContent>
        <NavAccountItem label="User Profile" />
        <NavAccountItem
          label="Logout"
          onClick={(e) => {
            e.preventDefault();

            form.post("/logout");
          }}
        />
      </MenuContent>
    </MenuRoot>
  );
};
