import { Slot } from "@radix-ui/react-slot";
import React from "react";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  return <Slot ref={ref} {...props} />;
});

FormControl.displayName = "FormControl";

export { FormControl };
