import { Layout, LayoutBody, LayoutHeader } from "~/components/custom/layout";
import * as React from "react";
import { ReactNode } from "react";
import ThemeSwitch from "~/components/theme-switch";
import { UserNav } from "~/components/user-nav";
import { cn } from "~/lib/utils";

export type PageContentProps = {
  header?: ReactNode | undefined;
  children?: ReactNode | undefined;
};

export function PageContent(props: PageContentProps) {
  return (
    <Layout fadedBelow fixedHeight>
      {!props.header && (
        <LayoutHeader>
          <div className="ml-auto flex items-center space-x-4" {...props}>
            <ThemeSwitch />
            <UserNav />
          </div>
        </LayoutHeader>
      )}
      <LayoutBody className="flex flex-col" fixedHeight>
        {props.children}
      </LayoutBody>
    </Layout>
  );
}
