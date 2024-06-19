import { Fragment, HTMLAttributes, ReactElement } from "react";
import { Link, router, usePage } from "@inertiajs/react";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/custom/button";
import { Select, SelectContent, SelectItem, SelectValue } from "~/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: ReactElement;
  }[];
}

const Sidebar = ({ className, items, ...props }: SidebarProps) => {
  const { url } = usePage();

  return (
    <Fragment>
      <div className="w-full md:hidden">
        <Select
          value={url}
          onValueChange={(value) => {
            router.get(value);
          }}
        >
          <SelectTrigger className="h-12 w-full">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.href} value={item.href}>
                <div className="flex gap-x-4 px-2 py-1">
                  <span className="scale-125">{item.icon}</span>
                  <span className="text-md">{item.title}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="hidden w-full overflow-x-auto bg-background px-1 py-2 md:block">
        <nav
          className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)}
          {...props}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                url === item.href
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline",
                "justify-start"
              )}
            >
              <span className="mr-2">{item.icon}</span>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </Fragment>
  );
};

export default Sidebar;
