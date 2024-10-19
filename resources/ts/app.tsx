import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { StrictMode } from "react";
// import { AppLayout } from "./components";
import { Provider } from "./components/ui/provider";

import "@fontsource-variable/inter";

const appName = window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: async (name) => {
    let page: any = await resolvePageComponent(
      `./pages/${name}.tsx`,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      import.meta.glob("./pages/**/*.tsx")
    );

    // page.default.layout = page.default.layout || ((page: any) => <AppLayout children={page} />);

    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <Provider>
          <App {...props} />
        </Provider>
      </StrictMode>
    );
  }
});
