import { forwardRef, InputGroup, Input, InputProps, useBoolean } from "@chakra-ui/react";

import { InputRightButton } from "./input-right-button";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface PasswordOptions {
  viewIcon?: React.ReactNode;
  viewOffIcon?: React.ReactNode;
  leftAddon?: React.ReactNode;
}

export interface PasswordInputProps extends InputProps, PasswordOptions {}

export const PasswordInput = forwardRef<PasswordInputProps, "div">(
  (
    { viewIcon, viewOffIcon, autoComplete, w, width, size, variant, leftAddon, ...inputProps },
    ref
  ) => {
    const [show, handlers] = useBoolean(false);

    const onClick = () => handlers.toggle();

    const label = show ? "Hide password" : "Show password";

    let icon;
    
    if (show) {
      icon = viewIcon || <EyeIcon size="1.25rem" />;
    } else {
      icon = viewOffIcon || <EyeOffIcon size="1.25rem" />;
    }

    const groupProps = {
      width: w || width,
      size,
      variant
    };

    return (
      <InputGroup {...groupProps}>
        {leftAddon}
        <Input
          {...inputProps}
          ref={ref}
          type={show ? "text" : "password"}
          autoComplete={show ? "off" : autoComplete}
        />
        <InputRightButton onClick={onClick} aria-label={label} variant="link">
          {icon}
        </InputRightButton>
      </InputGroup>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
