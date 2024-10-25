import { Box, BoxProps, Flex, HStack, Icon, IconButton, Stack } from "@chakra-ui/react";
import { SidebarMenu } from "./sidebar";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger
} from "../ui/drawer";
import { NavAccountButton, NavBrandButton } from "./nav-account";
import { LogOutIcon, MenuIcon, UserCircle2Icon } from "lucide-react";
import { Link, router } from "@inertiajs/react";

export type NavbarProps = Omit<BoxProps, "children">;

export const Navbar = (props: NavbarProps) => {
  return (
    <Box width="full" py="2" px={{ base: "1", md: "3" }} {...props}>
      <Flex justify="space-between" align="center">
        <NavBrandButton _hover={{ bg: "primary.50" }} />
        <HStack>
          <IconButton variant="ghost" asChild>
            <Link href="/profile">
              <UserCircle2Icon />
            </Link>
          </IconButton>
          <DrawerRoot placement="start">
            <DrawerBackdrop />
            <DrawerTrigger asChild>
              <IconButton variant="ghost">
                <MenuIcon />
              </IconButton>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerCloseTrigger />
              <DrawerHeader />
              <DrawerBody asChild>
                <Stack gap="6" flex="1" overflowY="auto" pt="2">
                  <SidebarMenu />
                </Stack>
              </DrawerBody>
              <DrawerFooter>
                <NavAccountButton
                  cursor="inherit"
                  _hover={{ bg: "white" }}
                  icon={
                    <Icon boxSize={5} cursor="pointer" asChild>
                      <LogOutIcon onClick={() => router.post("/logout")} />
                    </Icon>
                  }
                />
              </DrawerFooter>
            </DrawerContent>
          </DrawerRoot>
        </HStack>
      </Flex>
    </Box>
  );
};
