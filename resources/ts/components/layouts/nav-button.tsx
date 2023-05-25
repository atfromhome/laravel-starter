import { As, Button, ButtonProps, HStack, Icon, Text } from "@chakra-ui/react";
import { InertiaLinkProps } from "@inertiajs/react";

export interface NavButtonProps extends ButtonProps, Partial<Pick<InertiaLinkProps, "href">> {
  icon: As;
  label: string;
}

export const NavButton = (props: NavButtonProps) => {
  const { icon, label, ...buttonProps } = props;
  return (
    <Button variant="ghost" justifyContent="start" {...buttonProps}>
      <HStack spacing="3">
        <Icon as={icon} boxSize="5" color="primary.400" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};
