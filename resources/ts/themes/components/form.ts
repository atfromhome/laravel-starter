import { inputAnatomy } from "@chakra-ui/anatomy";

import {
  createMultiStyleConfigHelpers,
  defineStyle,
  defineStyleConfig
} from "@chakra-ui/styled-system";
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

const outlineVariant = definePartsStyle((props) => {
  return {
    field: {
      borderColor: "blackAlpha.300",
      _dark: {
        borderColor: "whiteAlpha.300"
      },
      _hover: {
        borderColor: "blackAlpha.400",
        _dark: {
          borderColor: "whiteAlpha.400"
        }
      }
    }
  };
});

const Input = defineMultiStyleConfig({
  defaultProps: {
    /* @ts-expect-error */
    focusBorderColor: "primary.500"
  },
  variants: {
    outline: outlineVariant
  }
});

export const formLabelTheme = {
  variants: {
    horizontal: {
      mb: 0,
      marginStart: "0.5rem"
    }
  }
};

export const inputTheme = Input;

export const numberInputTheme = Input;

export const pinInputTheme = defineStyleConfig({
  defaultProps: {
    /* @ts-expect-error */
    focusBorderColor: "primary.500"
  },
  variants: {
    outline: outlineVariant
  }
});

export const textareaTheme = defineStyleConfig({
  defaultProps: {
    /* @ts-expect-error */
    focusBorderColor: "primary.500"
  },
  variants: {
    outline: defineStyle((props) => inputTheme.variants?.outline(props).field ?? {})
  }
});

export const nativeSelectTheme = defineStyleConfig(Input);
