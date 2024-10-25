import { Box, BoxProps, Flex, HStack, Icon, IconButton, MenuSeparator } from "@chakra-ui/react";
import { NavAccountButton, NavBrandButton } from "./nav-account";
import { Link, router, usePage } from "@inertiajs/react";
import { useAppMenus } from "./menus";
import { CircleUserRoundIcon, LogOutIcon, LucideProps } from "lucide-react";
import { Button } from "../ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { Fragment, lazy, Suspense, useMemo } from "react";

import dynamicIconImports from "lucide-react/dynamicIconImports";
import { useUser } from "~/hooks";

interface MenuIconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

const MenuIcon = ({ name, ...props }: MenuIconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export const TopbarMenu = () => {
  const page = usePage();
  const appMenus = useAppMenus();

  const renderMenus = useMemo(() => {
    return appMenus.map((group, key) => {
      return group.label ? (
        <MenuRoot key={key}>
          <MenuTrigger asChild>
            <Button variant="ghost">
              {group.icon && (
                <MenuIcon name={group.icon} style={{ width: "16px", height: "16px" }} />
              )}
              {group.label}
            </Button>
          </MenuTrigger>
          <MenuContent width="52">
            {group.menus.map((menu) => {
              return (
                <MenuItem value={menu.label} key={menu.href} asChild>
                  <Link href={menu.href}>
                    <MenuIcon name={menu.icon} style={{ width: "16px", height: "16px" }} />
                    {menu.label}
                  </Link>
                </MenuItem>
              );
            })}
          </MenuContent>
        </MenuRoot>
      ) : (
        group.menus.map((menu) => {
          const active =
            menu.href === "/" ? menu.href === page.url : page.url.startsWith(menu.href);

          return (
            <Button variant={active ? "solid" : "ghost"} key={menu.href} asChild>
              <Link href={menu.href}>
                <MenuIcon name={menu.icon} style={{ width: "16px", height: "16px" }} />
                {menu.label}
              </Link>
            </Button>
          );
        })
      );
    });
  }, [appMenus]);

  return <Fragment>{renderMenus}</Fragment>;
};

export type TopbarProps = Omit<BoxProps, "children" | "bg">;

export const Topbar = (props: TopbarProps) => {
  const user = useUser();

  return (
    <Box
      py="2"
      top={0}
      bg="white"
      shadow="xs"
      width="full"
      position="sticky"
      px={{ base: "1", md: "3" }}
      zIndex="10"
      {...props}
    >
      <Flex justify="space-between" align="center">
        <HStack>
          <NavBrandButton _hover={{ bg: "white" }} />
          <HStack px={8}>
            <TopbarMenu />
          </HStack>
        </HStack>
        <HStack gap={6}>
          <MenuRoot>
            <MenuTrigger>
              <NavAccountButton
                withIcon={false}
                avatarPosition="right"
                _hover={{ bg: "gray.100" }}
              />
            </MenuTrigger>
            <MenuContent width="48">
              <MenuItem value="profile" asChild>
                <Link href="/profile">
                  <Icon asChild>
                    <CircleUserRoundIcon />
                  </Icon>
                  Profile
                </Link>
              </MenuItem>
              <MenuSeparator />
              <MenuItem
                value="logout"
                onClick={() => router.post("/logout")}
                color="fg.error"
                _hover={{ bg: "bg.error", color: "fg.error" }}
              >
                <Icon asChild>
                  <LogOutIcon />
                </Icon>
                Logout
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </HStack>
      </Flex>
    </Box>
  );
};
