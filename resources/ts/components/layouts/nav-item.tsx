import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { ChevronRightIcon, LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { ReactElement, ReactNode, Suspense, lazy } from "react";

export interface NavItemProps {
  href: string;
  label: string;
  subtle?: boolean;
  active?: boolean;
  icon: ReactNode;
  endElement?: ReactElement;
  children?: ReactNode;
}

interface NavItemIconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

const NavItemIcon = ({ name, ...props }: NavItemIconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

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
            <NavItemIcon size="1rem" name={icon as keyof typeof dynamicIconImports} />
          )}
          <Text fontWeight="inherit">{label}</Text>
        </HStack>
        {endElement && !children && <Box>{endElement}</Box>}
        {children && <Box fontSize="xs" flexShrink={0} as={ChevronRightIcon} />}
      </HStack>
    </Link>
  );
};
