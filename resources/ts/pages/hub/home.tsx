import { Button } from "~/components/custom/button";
import { Layout, LayoutBody, LayoutHeader } from "~/components/custom/layout";
import { TopNav } from "~/components/top-nav";
import { UserNav } from "~/components/user-nav";
import ThemeSwitch from "~/components/theme-switch";

const topNav = [
  {
    title: "Overview",
    href: "dashboard/overview",
    isActive: true
  },
  {
    title: "Customers",
    href: "dashboard/customers",
    isActive: false
  },
  {
    title: "Products",
    href: "dashboard/products",
    isActive: false
  },
  {
    title: "Settings",
    href: "dashboard/settings",
    isActive: false
  }
];

function Page() {
  return (
    <Layout>
      <LayoutHeader>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSwitch />
          <UserNav />
        </div>
      </LayoutHeader>
    </Layout>
  );
}

export default Page;
