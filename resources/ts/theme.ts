import { foundations } from "./themes";
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: { ...foundations }
  }
});

const theme = createSystem(defaultConfig, config);

export default theme;
