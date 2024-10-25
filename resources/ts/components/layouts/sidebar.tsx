import { Box, BoxProps, Flex, Stack } from "@chakra-ui/react";
import { NavGroup } from "./nav-group";
import { NavItem } from "./nav-item";
import { Fragment, useMemo } from "react";
import { useAppMenus } from "./menus";
import { usePage } from "@inertiajs/react";
import { NavAccountMenu, NavBrandButton } from "./nav-account";

type SidebarProps = Omit<BoxProps, "children">;

export const SidebarMenu = () => {
  const page = usePage();
  const appMenus = useAppMenus();

  const renderMenus = useMemo(
    () =>
      appMenus.map((group, key) => {
        return (
          <NavGroup label={group.label} key={key}>
            {group.menus.map((menu) => (
              <NavItem
                {...menu}
                key={menu.href}
                active={menu.href === "/" ? menu.href === page.url : page.url.startsWith(menu.href)}
              />
            ))}
          </NavGroup>
        );
      }),
    [appMenus]
  );

  return <Fragment>{renderMenus}</Fragment>;
};

export const Sidebar = (props: SidebarProps) => {
  return (
    <Box
      maxW={{ base: "full", sm: "20rem" }}
      w={{ base: "full", sm: "20rem" }}
      bg="primary.50"
      color="primary.600"
      fontSize="sm"
      borderRight="1px"
      borderRightColor="primary.500"
      h="full"
      {...props}
    >
      <Flex h="full" direction="column" px="4" py="2">
        <NavBrandButton />
        <Stack gap="6" flex="1" overflowY="auto" pt="2">
          <SidebarMenu />
        </Stack>
        <NavAccountMenu />
      </Flex>
    </Box>
  );
};
