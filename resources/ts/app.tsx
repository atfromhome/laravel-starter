import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

const appName = window.document.getElementsByTagName("title")[0]?.innerText || "Psanan";

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.tsx`,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      import.meta.glob("./pages/**/*.tsx")
    ),
  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <ChakraProvider theme={theme}>
          <App {...props} />
        </ChakraProvider>
      </StrictMode>
    );
  }
});
