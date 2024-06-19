import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import React from "react";
import AppShell from "./components/app-shell";
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "./components/ui/toaster";

const appName = window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: async (name) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, prefer-const
    let page: any = await resolvePageComponent(
      `./pages/${name}.tsx`,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      import.meta.glob("./pages/**/*.tsx")
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    page.default.layout = page.default.layout || ((page: any) => <AppShell>{page}</AppShell>);

    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <React.StrictMode>
        <ThemeProvider defaultTheme="system" storageKey="fromhome-theme">
          <App {...props} />
          <Toaster />
        </ThemeProvider>
      </React.StrictMode>
    );
  }
});
