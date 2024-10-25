import { Card, Icon, Input, VStack, chakra } from "@chakra-ui/react";
import { useForm } from "@inertiajs/react";
import { SaveIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { UseUserReturn } from "~/hooks";

type PersonalInfoCardProps = Omit<Card.RootProps, "children"> & {
  user: UseUserReturn;
};

export const PersonalInfoCard = ({ user, ...props }: PersonalInfoCardProps) => {
  const form = useForm({
    name: user.name || "",
    email: user.email || ""
  });

  return (
    <Card.Root
      as={chakra.form}
      onSubmit={(e) => {
        e.preventDefault();

        form.put("/user/profile-information", {
          preserveState: true
        });
      }}
      w="full"
      {...props}
    >
      <Card.Body>
        <VStack align="stretch" gap={4}>
          <Field
            label="Name"
            required
            invalid={Boolean(form.errors.email)}
            errorText={form.errors.name}
          >
            <Input
              id="name"
              type="name"
              placeholder="Your name"
              autoComplete="off"
              value={form.data.name}
              onChange={(e) => form.setData("name", e.target.value)}
            />
          </Field>

          <Field
            label="Email"
            required
            invalid={Boolean(form.errors.email)}
            errorText={form.errors.email}
          >
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              autoComplete="off"
              value={form.data.email}
              onChange={(e) => form.setData("email", e.target.value)}
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
