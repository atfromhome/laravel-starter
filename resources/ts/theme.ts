import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { components, foundations, styles } from "./themes";

const theme = extendTheme(
  {
    ...foundations,
    styles,
    components
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export default theme;
