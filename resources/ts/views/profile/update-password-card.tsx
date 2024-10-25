import { Card, chakra, Icon, VStack } from "@chakra-ui/react";
import { useForm } from "@inertiajs/react";
import { SaveIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { PasswordInput } from "~/components/ui/password-input";

type UpdatePasswordCardProps = Omit<Card.RootProps, "children">;

export const UpdatePasswordCard = ({ ...props }: UpdatePasswordCardProps) => {
  const form = useForm({
    password: "",
    current_password: "",
    password_confirmation: ""
  });

  return (
    <Card.Root
      as={chakra.form}
      onSubmit={(e) => {
        e.preventDefault();

        form.put("/user/password", {
          preserveState: false,
          onSuccess: () => {
            form.reset();
          }
        });
      }}
      w="full"
      {...props}
    >
      <Card.Body>
        <VStack align="stretch" gap={4}>
          <Field
            label="Current Password"
            required
            invalid={Boolean(form.errors.current_password)}
            errorText={form.errors.current_password}
          >
            <PasswordInput
              id="current_password"
              placeholder="Your current password"
              value={form.data.current_password}
              onChange={(e) => form.setData("current_password", e.target.value)}
            />
          </Field>
          <Field
            label="New Password"
            required
            invalid={Boolean(form.errors.password)}
            errorText={form.errors.password}
          >
            <PasswordInput
              id="password"
              placeholder="Your new password"
              value={form.data.password}
              onChange={(e) => form.setData("password", e.target.value)}
            />
          </Field>
          <Field
            label="Confirm New Password"
            required
            invalid={Boolean(form.errors.password_confirmation)}
            errorText={form.errors.password_confirmation}
          >
            <PasswordInput
              id="password_confirmation"
              placeholder="Confirm your new password"
              value={form.data.password_confirmation}
              onChange={(e) => form.setData("password_confirmation", e.target.value)}
            />
          </Field>
        </VStack>
      </Card.Body>
      <Card.Footer justifyContent="end">
        <Button type="submit" loading={form.processing} loadingText="Menyimpan">
          <Icon asChild boxSize={4}>
            <SaveIcon />
          </Icon>{" "}
          Simpan
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
