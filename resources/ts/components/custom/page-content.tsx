import { Layout, LayoutBody, LayoutHeader } from "~/components/custom/layout";
import * as React from "react";
import { ReactNode } from "react";
import ThemeSwitch from "~/components/theme-switch";
import { UserNav } from "~/components/user-nav";

export type PageContentProps = {
  header?: ReactNode | undefined;
  title?: string | undefined;
  children?: ReactNode | undefined;
};

export function PageContent({ header, title, children, ...props }: PageContentProps) {
  return (
    <Layout fadedBelow fixedHeight>
      {!header && (
        <LayoutHeader className="border-b-2 border-b-muted">
          {title && <h1 className="font-semibold">{title}</h1>}
          <div className="ml-auto flex items-center space-x-4" {...props}>
            <ThemeSwitch />
            <UserNav />
          </div>
        </LayoutHeader>
      )}
      <LayoutBody className="flex flex-col" fixedHeight>
        {children}
      </LayoutBody>
    </Layout>
  );
}
