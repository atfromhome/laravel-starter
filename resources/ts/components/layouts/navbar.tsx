import { Box, Drawer, DrawerContent, DrawerOverlay, Flex, useDisclosure } from "@chakra-ui/react";
import { Logo } from "../logo";
import { Sidebar, SidebarMenu } from "./sidebar";
import { ToggleButton } from "./toggle-button";

export type NavbarProps = {
  menus: SidebarMenu[];
  settingPage?: boolean;
};

export const Navbar = ({ menus, settingPage = false }: NavbarProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  
  return (
    <Box width="full" py="4" px={{ base: "4", md: "8" }} bg="white" boxShadow="sm">
      <Flex justify="space-between">
        <Logo h={10} />
        <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          isFullHeight
          preserveScrollBarGap
        >
          <DrawerOverlay />
          <DrawerContent>
            <Sidebar menus={menus} settingPage={settingPage} />
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};
