import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from "react";
import { IconChevronsLeft, IconMenu2, IconX } from "@tabler/icons-react";
import { Layout, LayoutHeader } from "./custom/layout";
import { Button } from "./custom/button";
import Nav from "./nav";
import { cn } from "~/lib/utils";
import useNavigation from "~/hooks/use-navigation";
import { useTheme } from "~/components/theme-provider";

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar2({ className, isCollapsed, setIsCollapsed }: SidebarProps) {
  const theme = useTheme();
  const navigations = useNavigation();

  const [navOpened, setNavOpened] = useState(false);

  /* Make body not scrollable when navBar is opened */
  useEffect(() => {
    if (navOpened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navOpened]);

  return (
    <aside
      className={cn(
        `fixed left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${isCollapsed ? "md:w-14" : "md:w-64"}`,
        className
      )}
    >
      {/* Overlay in mobile */}
      <div
        onClick={() => setNavOpened(false)}
        className={`absolute inset-0 transition-[opacity] delay-100 duration-700 ${navOpened ? "h-svh opacity-50" : "h-0 opacity-0"} w-full bg-black md:hidden`}
      />

      <Layout>
        {/* Header */}
        <LayoutHeader className="sticky top-0 justify-between px-4 py-3 shadow md:px-4">
          <div className="flex items-center justify-center w-full ">
            <div className="flex items-center gap-3">
              <img
                alt="Logo"
                src={theme.theme === "light" ? "/logomark.dark.svg" : "/logomark.light.svg"}
                className="h-10"
              />
              {!isCollapsed && (
                <img
                  alt="Logo"
                  src={theme.theme === "light" ? "/logotype.dark.svg" : "/logotype.light.svg"}
                  className="h-6"
                />
              )}
            </div>
          </div>

          {/* Toggle Button in mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle Navigation"
            aria-controls="sidebar-menu"
            aria-expanded={navOpened}
            onClick={() => setNavOpened((prev) => !prev)}
          >
            {navOpened ? <IconX /> : <IconMenu2 />}
          </Button>
        </LayoutHeader>

        {/* Navigation links */}
        <Nav
          id="sidebar-menu"
          className={`h-full flex-1 overflow-auto ${navOpened ? "max-h-screen" : "max-h-0 py-0 md:max-h-screen md:py-2"}`}
          closeNav={() => setNavOpened(false)}
          isCollapsed={isCollapsed}
          links={navigations}
        />

        {/* Scrollbar width toggle button */}
        <Button
          onClick={() => setIsCollapsed((prev) => !prev)}
          size="icon"
          variant="outline"
          className="absolute -right-5 top-1/2 hidden rounded-full md:inline-flex"
        >
          <IconChevronsLeft stroke={1.5} className={`h-5 w-5 ${isCollapsed ? "rotate-180" : ""}`} />
        </Button>
      </Layout>
    </aside>
  );
}
