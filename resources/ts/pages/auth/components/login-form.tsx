import { Link, useForm } from "@inertiajs/react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/form";
import type { FormData } from "~/components/form";
import { Button } from "~/components/custom/button";
import { Input } from "~/components/ui/input";

interface LoginFormData extends FormData {
  email: string;
  password: string;
  remember: boolean;
}

const LoginForm = () => {
  const form = useForm<LoginFormData>({
    email: "",
    password: "",
    remember: true
  });

  return (
    <Form
      form={form}
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();

        form.post("/login");
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
      <FormField
        id="password"
        name="password"
        render={({ invalid, error, ...field }) => (
          <FormItem>
            <div className="flex items-center">
              <FormLabel htmlFor="password" invalid={invalid}>
                Password
              </FormLabel>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm text-muted-foreground hover:opacity-75"
                tabIndex={-1}
              >
                Forgot your password?
              </Link>
            </div>
            <FormControl>
              <Input {...field} type="password" placeholder="********" required />
            </FormControl>
            <FormMessage>{error}</FormMessage>
          </FormItem>
        )}
      />
      <Button loading={form.processing} type="submit" className="w-full">
        Login
      </Button>
    </Form>
  );
};

LoginForm.displayName = "LoginForm";

export { LoginForm };
