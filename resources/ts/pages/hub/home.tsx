import { Button } from "~/components/custom/button";
import { Layout, LayoutBody, LayoutHeader } from "~/components/custom/layout";
import { TopNav } from "~/components/top-nav";
import { UserNav } from "~/components/user-nav";

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
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </LayoutHeader>
      <LayoutBody className="flex flex-col" fixedHeight>
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Dashboard</h1>
          <div className="flex items-center space-x-2">
            <Button>Download</Button>
          </div>
        </div>
      </LayoutBody>
    </Layout>
  );
}

export default Page;
