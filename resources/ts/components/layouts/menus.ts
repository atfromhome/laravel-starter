import { Home, UserCircle } from "lucide-react";
import { SidebarMenu } from "./sidebar";

export const appMenus: SidebarMenu[] = [
  { label: "Home", icon: Home, href: "/" }
];

export const settingMenus: SidebarMenu[] = [
  { label: "Profile", icon: UserCircle, href: "/profile" }
];

