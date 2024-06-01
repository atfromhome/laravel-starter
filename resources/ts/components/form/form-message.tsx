import React from "react";
import { cn } from "~/lib/utils";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HtmlHTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return children ? (
    <p ref={ref} {...props} className={cn("text-sm text-destructive", className)}>
      {children}
    </p>
  ) : null;
});

FormMessage.displayName = "FormMessage";

export { FormMessage };
