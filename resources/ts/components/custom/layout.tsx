import * as React from "react";
import { cn } from "~/lib/utils";
import ThemeSwitch from "~/components/theme-switch";
import { UserNav } from "~/components/user-nav";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  fadedBelow?: boolean;
  fixedHeight?: boolean;
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, fadedBelow = false, fixedHeight = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex h-full w-full flex-col",
        fadedBelow &&
          "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:hidden after:h-32 after:w-full after:bg-[linear-gradient(180deg,_transparent_10%,_hsl(var(--background))_70%)] after:md:block",
        fixedHeight && "md:h-svh",
        className
      )}
      {...props}
    />
  )
);

Layout.displayName = "Layout";

export interface LayoutHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const LayoutHeader = React.forwardRef<HTMLDivElement, LayoutHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex h-[var(--header-height)] flex-none items-center gap-4 bg-background p-4 md:px-8",
        className
      )}
      {...props}
    />
  )
);

LayoutHeader.displayName = "LayoutHeader";

export interface LayoutBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  fixedHeight?: boolean;
}

const LayoutBody = React.forwardRef<HTMLDivElement, LayoutBodyProps>(
  ({ className, fixedHeight, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex-1 overflow-hidden px-4 py-6 md:px-8",
        fixedHeight && "h-[calc(100%-var(--header-height))]",
        className
      )}
      {...props}
    />
  )
);

LayoutBody.displayName = "LayoutBody";

const UserLayoutHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <LayoutHeader>
      <div className="ml-auto flex items-center space-x-4">
        <ThemeSwitch />
        <UserNav />
      </div>
    </LayoutHeader>
  )
);

UserLayoutHeader.displayName = "UserLayoutHeader";

export { Layout, LayoutHeader, LayoutBody, UserLayoutHeader };
