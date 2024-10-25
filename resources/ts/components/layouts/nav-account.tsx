import { Box, Flex, FlexProps, HStack, Icon } from "@chakra-ui/react";
import { Link, router } from "@inertiajs/react";
import {
  BoxIcon,
  ChevronsUpDownIcon,
  CircleUserRoundIcon,
  LogOutIcon,
  UserCircle2Icon
} from "lucide-react";
import { useUser } from "~/hooks";
import { MenuContent, MenuItem, MenuRoot, MenuSeparator, MenuTrigger } from "../ui/menu";
import { Fragment, ReactNode } from "react";

export const NavBrandButton = (props: FlexProps) => {
  return (
    <Link href="/">
      <Flex
        px="2"
        py="2"
        w="full"
        border="1px"
        rounded="md"
        display="flex"
        alignItems="center"
        userSelect="none"
        cursor="pointer"
        _hover={{ bg: "primary.100" }}
        {...props}
      >
        <HStack flex="1" gap="3">
          <Icon boxSize="8" bg="primary.600" p={1} rounded="md">
            <BoxIcon color="white" />
          </Icon>
          <Box textAlign="start">
            <Box fontWeight="semibold">Starter Inc</Box>
            <Box fontSize="xs" color="primary.500">
              FromHome
            </Box>
          </Box>
        </HStack>
      </Flex>
    </Link>
  );
};

const AvatarIcon = () => {
  return (
    <Icon boxSize="8" bg="primary.600" p={1} rounded="md">
      <CircleUserRoundIcon color="white" />
    </Icon>
  );
};

export const NavAccountButton = ({
  icon = null,
  withIcon = true,
  avatarPosition = "left",
  ...props
}: FlexProps & {
  withIcon?: boolean;
  icon?: ReactNode;
  avatarPosition?: "left" | "right";
}) => {
  const user = useUser();

  return (
    <Flex
      px="2"
      py="2"
      w="full"
      border="1px"
      rounded="md"
      display="flex"
      alignItems="center"
      userSelect="none"
      cursor="pointer"
      _hover={{ bg: "primary.100" }}
      {...props}
    >
      <HStack flex="1" gap="4">
        {avatarPosition === "left" && <AvatarIcon />}
        <Box textAlign="start">
          <Box fontWeight="semibold">{user?.name}</Box>
          <Box fontSize="xs" color="primary.500">
            {user?.email}
          </Box>
        </Box>
        {avatarPosition === "right" && <AvatarIcon />}
      </HStack>
      {withIcon && (
        <Fragment>
          {icon || (
            <Icon boxSize="4">
              <ChevronsUpDownIcon />
            </Icon>
          )}
        </Fragment>
      )}
    </Flex>
  );
};

export const NavAccountMenu = () => {
  return (
    <MenuRoot positioning={{ placement: "right-start" }}>
      <MenuTrigger>
        <NavAccountButton />
      </MenuTrigger>
      <MenuContent width="48">
        <MenuItem value="profile" style={{ cursor: "pointer" }} asChild>
          <Link href="/profile">
            <Icon asChild>
              <UserCircle2Icon />
            </Icon>
            Profile
          </Link>
        </MenuItem>
        <MenuSeparator />
        <MenuItem
          value="logout"
          style={{ cursor: "pointer" }}
          onClick={() => router.post("/logout")}
        >
          <Icon asChild>
            <LogOutIcon />
          </Icon>
          Logout
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};
