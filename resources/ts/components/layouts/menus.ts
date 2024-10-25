import { ReactNode, useMemo } from "react";
import { usePageProps } from "~/hooks";

export interface MenuGroup {
  label: string;
  icon: any;
  menus: Array<Menu>;
}

export interface Menu {
  label: string;
  icon: any;
  href: string;
}

export const useAppMenus = (): MenuGroup[] => {
  const props = usePageProps();

  const menus = useMemo(() => props.menus, [props.menus]);

  return menus as Array<MenuGroup>;
};
