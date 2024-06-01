import { useForm } from "@inertiajs/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "~/components/form";
import type { FormData } from "~/components/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { usePageProps } from "~/hooks/use-page-props";

interface ResetPasswordData extends FormData {
  token: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const ResetPassword = () => {
  const page = usePageProps();

  const form = useForm<ResetPasswordData>({
    token: page?.token || "",
    email: page?.email || "",
    password: "",
    password_confirmation: ""
  });

  return (
    <Form
      form={form}
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();

        form.post("/reset-password");

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
      <FormField
        id="password"
        name="password"
        render={({ invalid, error, ...field }) => (
          <FormItem>
            <FormLabel htmlFor="password" invalid={invalid}>
              Password
            </FormLabel>
            <FormControl>
              <Input {...field} type="password" placeholder="********" required />
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
              Konfirm password
            </FormLabel>
            <FormControl>
              <Input {...field} type="password" placeholder="********" required />
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

ResetPassword.displayName = "ResetPassword";

export { ResetPassword };
