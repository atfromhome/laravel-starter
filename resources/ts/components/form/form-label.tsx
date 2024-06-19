import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Label } from "../ui/label";
import { cn } from "~/lib/utils";

type FormLabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  invalid?: boolean;
};

const FormLabel = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, FormLabelProps>(
  ({ className, invalid, ...props }, ref) => {
    return <Label ref={ref} className={cn(invalid && "text-destructive", className)} {...props} />;
  }
);

FormLabel.displayName = "FormLabel";

export { FormLabel };
