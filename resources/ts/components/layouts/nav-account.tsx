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
  MenuItemProps,
  MenuList,
  useMenuButton
} from "@chakra-ui/react";
import { InertiaLinkProps, Link, useForm } from "@inertiajs/react";
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
    <Menu matchWidth>
      <NavAccountButton />
      <MenuList shadow="lg" py="4" px="3">
        <NavAccountItem label="User Profile" as={Link} href="/profile" />
        <MenuDivider />
        <NavAccountItem
          label="Logout"
          onClick={(e) => {
            e.preventDefault();

            form.post("/logout");
          }}
        />
      </MenuList>
    </Menu>
  );
};
