import {
  inputTheme,
  pinInputTheme,
  formLabelTheme,
  numberInputTheme,
  nativeSelectTheme,
  textareaTheme
} from "./form";
import { buttonTheme } from "./button";

export {
  inputTheme as Input,
  pinInputTheme as PinInput,
  formLabelTheme as FormLabel,
  numberInputTheme as NumberInput,
  nativeSelectTheme as Select,
  textareaTheme as Textarea
} from "./form";
export { buttonTheme as Button } from "./button";

export const components = {
  Button: buttonTheme,
  Input: inputTheme,
  PinInput: pinInputTheme,
  FormLabel: formLabelTheme,
  NumberInput: numberInputTheme,
  Select: nativeSelectTheme,
  Textarea: textareaTheme
};
