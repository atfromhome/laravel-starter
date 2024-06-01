import { usePageProps } from "~/hooks/use-page-props";
import { useMemo } from "react";

export interface NavigationItem {
  sort: number;
  label: string;
  icon: string;
  href: string;
  subs: null | NavigationItem[];
}

export interface NavLink {
  title: string;
  href: string;
  icon: string;
  label?: string;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

const useNavigation = (): SideLink[] => {
  const props = usePageProps();

  return useMemo(() => {
      return (props.menus as NavigationItem[]).map((item): SideLink => {
          return {
              title: item.label,
              href: item.href,
              icon: item.icon,
              sub: item.subs?.map((sub) => ({
                  title: sub.label,
                  href: sub.href,
                  icon: sub.icon
              }))
          };
      });
  }, [props.menus]);
};

export default useNavigation;
