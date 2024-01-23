import { extendTheme, withDefaultColorScheme, withDefaultProps } from "@chakra-ui/react";
import { components, foundations, styles } from "./themes";

const theme = extendTheme(
  {
    ...foundations,
    styles,
    components
  },
  withDefaultColorScheme({ colorScheme: "primary" }),
  withDefaultProps({
    defaultProps: {
      variant: "outline"
    },
    components: ["Card"]
  })
);

export default theme;
