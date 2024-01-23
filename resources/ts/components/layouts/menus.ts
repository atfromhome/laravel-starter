import { As } from "@chakra-ui/react";
import { useMemo } from "react";
import { usePageProps } from "~/hooks";

export interface MenuGroup {
  label: string;
  menus: Array<Menu>;
}

export interface Menu {
  label: string;
  icon: As;
  href: string;
}

export const useAppMenus = (): MenuGroup[] => {
  const props = usePageProps();

  return props.menus as Array<MenuGroup>;
};
