import { HtmlHTMLAttributes, forwardRef } from "react";
import { cn } from "~/lib/utils";

const FormItem = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={cn("grid gap-2", className)} ref={ref} {...props} />;
  }
);

FormItem.displayName = "FormItem";

export { FormItem };
