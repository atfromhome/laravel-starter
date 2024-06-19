import { PageContent, PageContentProps } from "~/components/custom/page-content";
import { Separator } from "~/components/ui/separator";
import Sidebar, { SidebarProps } from "~/pages/user-profile/components/sidebar";
import { IconBrowser, IconKey, IconUser } from "@tabler/icons-react";
import { useMemo } from "react";

interface LayoutProps extends Pick<PageContentProps, "children">, Pick<SidebarProps, "items"> {}

const Layout = ({ items, ...props }: LayoutProps) => {
  return (
    <PageContent>
      <div className="space-y-0.5">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Pengaturan Akun</h1>
        <p className="text-muted-foreground">
          Kelola pengaturan akun kamu disini, ubah email, nama atau hapus akun.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-1 flex-col space-y-8 overflow-auto lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="sticky top-0 lg:w-1/4">
          <Sidebar items={items} />
        </aside>
        <div className="w-full">
          <div className="pb-16">{props.children}</div>
        </div>
      </div>
    </PageContent>
  );
};

export const SettingProfile = (props: Omit<LayoutProps, "items">) => {
  const navItems = useMemo(
    () => [
      {
        title: "Akun",
        icon: <IconUser size={18} />,
        href: "/user/profile-information"
      },
      {
        title: "Kata sandi",
        icon: <IconKey size={18} />,
        href: "/user/password"
      },
      {
        title: "Sesi browser",
        icon: <IconBrowser size={18} />,
        href: "/user/browser-sessions"
      }
    ],
    []
  );

  return <Layout {...props} items={navItems} />;
};
