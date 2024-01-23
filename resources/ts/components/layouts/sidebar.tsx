import { Box, Flex, Stack } from "@chakra-ui/react";
import { NavAccount } from "./nav-account";
import { NavGroup } from "./nav-group";
import { NavItem } from "./nav-item";
import { useMemo } from "react";
import { useAppMenus } from "./menus";
import { usePage } from "@inertiajs/react";

export const Sidebar = () => {
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

  return (
    <Box
      maxW={{ base: "full", sm: "18rem" }}
      w={{ base: "full", sm: "18rem" }}
      bg="white"
      color="stale.600"
      fontSize="sm"
      borderRight="1px"
      borderRightColor="stale.100"
      h="full"
    >
      <Flex h="full" direction="column" px="4" py="4">
        <NavAccount />
        <Stack spacing="8" flex="1" overflowY="auto" mt={2} pt="6">
          {renderMenus}
        </Stack>
      </Flex>
    </Box>
  );
};
