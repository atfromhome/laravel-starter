import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { components, foundations, styles } from "./themes";

import "@fontsource/inter/variable.css";

const theme = extendTheme(
  {
    ...foundations,
    styles,
    components
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export default theme;
