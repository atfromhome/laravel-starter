import { Card, Center, chakra, Container, Input, VStack } from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";
import { Fragment, ReactNode } from "react";
import { Logo } from "~/components";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { PasswordInput } from "~/components/ui/password-input";

type PageProps = {
  email: string;
  token: string;
  status?: string;
  [key: string]: unknown;
};

function Page(props: PageProps) {
  const form = useForm({
    email: props.email || "",
    token: props.token || "",
    password: "",
    password_confirmation: ""
  });

  return (
    <Center minH="100vh">
      <Head>
        <title>Reset Password</title>
      </Head>

      <Container fluid maxWidth={{ base: "full", md: "xl" }}>
        <Center pb={8}>
          <Logo h={14} />
        </Center>
        <Card.Root
          as={chakra.form}
          onSubmit={(e) => {
            e.preventDefault();

            form.post("/reset-password");
          }}
        >
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <Field
                label="Email"
                required
                invalid={Boolean(form.errors.email)}
                errorText={form.errors.email}
              >
                <Input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  autoComplete="off"
                  value={form.data.email}
                  onChange={(e) => form.setData("email", e.target.value)}
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
                  onChange={(e) => form.setData("password", e.target.value)}
                />
              </Field>
              <chakra.input type="hidden" value={form.data.token} />
            </VStack>
          </Card.Body>
          <Card.Footer>
            <Button w="full" type="submit" loading={form.processing}>
              Reset Password
            </Button>
          </Card.Footer>
        </Card.Root>
      </Container>
    </Center>
  );
}

Page.layout = (page: ReactNode) => <Fragment>{page}</Fragment>;

export default Page;
