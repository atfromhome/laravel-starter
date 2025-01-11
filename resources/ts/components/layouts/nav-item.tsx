import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { ChevronRightIcon } from "lucide-react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { ReactElement, ReactNode } from "react";

export interface NavItemProps {
  href: string;
  label: string;
  subtle?: boolean;
  active?: boolean;
  icon: ReactNode;
  endElement?: ReactElement;
  children?: ReactNode;
}

export const NavItem = (props: NavItemProps) => {
  const { active, subtle, icon, children, label, endElement, href } = props;

  return (
    <Link href={href}>
      <HStack
        w="full"
        px="3"
        py="2"
        cursor="pointer"
        userSelect="none"
        rounded="md"
        transition="all 0.2s"
        color={subtle ? "primary.400" : active ? "white" : undefined}
        bg={active ? "primary.600" : undefined}
        _hover={{ bg: "primary.600", color: "white", textDecoration: "none" }}
        _active={{ bg: "primary.600", color: "white" }}
      >
        <HStack w="full">
          {typeof icon !== "string" ? (
            <Icon boxSize={4}>{icon}</Icon>
          ) : (
            <DynamicIcon size="1rem" name={icon as IconName} />
          )}
          <Text fontWeight="inherit">{label}</Text>
        </HStack>
        {endElement && !children && <Box>{endElement}</Box>}
        {children && <Box fontSize="xs" flexShrink={0} as={ChevronRightIcon} />}
      </HStack>
    </Link>
  );
};
