import { Link, useForm } from "@inertiajs/react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/form";
import type { FormData } from "~/components/form";
import { Button } from "~/components/custom/button";
import { Input } from "~/components/ui/input";

interface RegisterFormData extends FormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const RegisterForm = () => {
  const form = useForm<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  return (
    <Form
      form={form}
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();

        form.post("/register");
      }}
    >
      <FormField
        id="name"
        name="name"
        render={({ invalid, error, ...field }) => (
          <FormItem>
            <FormLabel htmlFor="name" invalid={invalid}>
              Name
            </FormLabel>
            <FormControl>
              <Input {...field} id="name" required placeholder="Your name" autoComplete="off" />
            </FormControl>
            <FormMessage>{error}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        id="email"
        name="email"
        render={({ invalid, error, ...field }) => (
          <FormItem>
            <FormLabel htmlFor="email" invalid={invalid}>
              Email
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                id="email"
                required
                placeholder="mail@example.com"
                autoComplete="off"
              />
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
            <FormLabel htmlFor="password" invalid={invalid}>
              Password
            </FormLabel>
            <FormControl>
              <Input {...field} id="password" type="password" placeholder="********" required />
            </FormControl>
            <FormMessage>{error}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        id="password_confirmation"
        name="password_confirmation"
        render={({ invalid, error, ...field }) => (
          <FormItem>
            <FormLabel htmlFor="password_confirmation" invalid={invalid}>
              Password confirmation
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                id="password_confirmation"
                type="password"
                placeholder="********"
                required
              />
            </FormControl>
            <FormMessage>{error}</FormMessage>
          </FormItem>
        )}
      />
      <Button loading={form.processing} type="submit" className="w-full">
        Daftar
      </Button>
    </Form>
  );
};

RegisterForm.displayName = "RegisterForm";

export { RegisterForm };
