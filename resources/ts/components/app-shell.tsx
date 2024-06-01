import React from "react";
import Sidebar from "./sidebar";
import useIsCollapsed from "~/hooks/use-is-collapsed";
import { cn } from "~/lib/utils";

export default function AppShell({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed();
  return (
    <div className={cn("relative h-full overflow-hidden bg-background", className)} {...props}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        id="content"
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? "md:ml-14" : "md:ml-64"} h-full`}
      >
        {children}
      </main>
    </div>
  );
}
