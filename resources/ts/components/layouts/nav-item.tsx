import { As, Box, HStack, Icon, Text } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { ChevronRightIcon } from "lucide-react";
import { ReactElement, ReactNode } from "react";

export interface NavItemProps {
  href: string;
  label: string;
  subtle?: boolean;
  active?: boolean;
  icon: As;
  endElement?: ReactElement;
  children?: ReactNode;
}

export const NavItem = (props: NavItemProps) => {
  const { active, subtle, icon, children, label, endElement, href } = props;

  return (
    <HStack
      as={Link}
      href={href}
      w="full"
      px="3"
      py="2"
      cursor="pointer"
      userSelect="none"
      rounded="md"
      transition="all 0.2s"
      bg={active ? "stale.500" : undefined}
      _hover={{ bg: "stale.500" }}
      _active={{ bg: "stale.400" }}
    >
      <HStack w="full">
        <Icon as={icon} boxSize={4} color={active ? "currentcolor" : "gray.400"} />
        <Text fontWeight="inherit" color={subtle ? "gray.400" : undefined}>
          {label}
        </Text>
      </HStack>
      {endElement && !children && <Box>{endElement}</Box>}
      {children && <Box fontSize="xs" flexShrink={0} as={ChevronRightIcon} />}
    </HStack>
  );
};
