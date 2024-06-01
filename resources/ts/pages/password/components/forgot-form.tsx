import { useForm } from "@inertiajs/react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/form";
import type { FormData } from "~/components/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

interface ForgotPasswordData extends FormData {
  email: string;
}

const ForgotPassword = () => {
  const form = useForm<ForgotPasswordData>({
    email: ""
  });

  return (
    <Form
      form={form}
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();

        form.post("/forgot-password");

        if (form.recentlySuccessful) {
          form.reset();
        }
      }}
    >
      <FormField
        id="email"
        name="email"
        render={({ invalid, error, ...field }) => (
          <FormItem>
            <FormLabel htmlFor="email" invalid={invalid}>
              Email
            </FormLabel>
            <FormControl>
              <Input {...field} required placeholder="mail@example.com" autoComplete="off" />
            </FormControl>
            <FormMessage>{error}</FormMessage>
          </FormItem>
        )}
      />
      <Button type="submit" className="w-full">
        Kirim
      </Button>
    </Form>
  );
};

ForgotPassword.displayName = "ForgotPassword";

export { ForgotPassword };
