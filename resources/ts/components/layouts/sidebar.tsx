import { Center, Divider, Flex, FlexProps, Stack } from "@chakra-ui/react";
import { NavButton, NavButtonProps } from "./nav-button";
import { UserProfile } from "./user-profile";
import { Logo } from "../logo";
import { DoorOpen, Home, LogOut } from "lucide-react";
import { Settings } from "lucide-react";
import { Link, router } from "@inertiajs/react";
import { useUser } from "~/hooks";

export type SidebarMenu = Pick<NavButtonProps, "label" | "icon" | "href">;

export interface SidebarProps extends FlexProps {
  menus: SidebarMenu[];
  settingPage?: boolean;
}

export const Sidebar = ({ menus, settingPage = false, ...props }: SidebarProps) => {
  const user = useUser();

  const mainMenus = menus.map((menu) => <NavButton key={menu.href} {...menu} as={Link} />);

  return (
    <Flex as="section" minH="100vh" bg="white" {...props}>
      <Flex
        flex="1"
        overflowY="auto"
        boxShadow="md"
        maxW={{ base: "full", sm: "xs" }}
        py={{ base: "6", sm: "8" }}
        px={{ base: "4", sm: "6" }}
        minW={300}
      >
        <Stack justify="space-between" spacing="1" minW="full">
          <Stack spacing={{ base: "5", sm: "6" }} shouldWrapChildren>
            <Stack spacing="4">
              <Center>
                <Logo h={10} />
              </Center>
              <Divider />
            </Stack>
            <Stack spacing="1">{mainMenus}</Stack>
          </Stack>
          <Stack spacing={{ base: "5", sm: "6" }}>
            <Stack spacing="1">
              {settingPage ? (
                <NavButton label="Exit settings" icon={DoorOpen} as={Link} href="/" />
              ) : (
                <NavButton label="Settings" icon={Settings} as={Link} href="/profile" />
              )}
              <NavButton
                label="Sign out"
                icon={LogOut}
                onClick={(e) => {
                  e.preventDefault();

                  router.post("/logout");
                }}
              />
            </Stack>
            <Divider />
            <UserProfile name={user?.name || ""} email={user?.email || ""} />
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
