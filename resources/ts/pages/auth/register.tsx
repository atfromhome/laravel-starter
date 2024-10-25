import { Card, Center, Container, Input, Text, VStack, chakra } from "@chakra-ui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Fragment, ReactNode } from "react";
import { Logo } from "~/components";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { PasswordInput } from "~/components/ui/password-input";

function Page() {
  const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  return (
    <Center minH="100vh">
      <Head>
        <title>Register</title>
      </Head>

      <Container fluid maxWidth={{ base: "full", md: "xl" }}>
        <Center pb={8}>
          <Logo h={14} />
        </Center>
        <Card.Root
          as={chakra.form}
          onSubmit={(e) => {
            e.preventDefault();

            form.post("/register");
          }}
        >
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <Field
                label="Name"
                required
                invalid={Boolean(form.errors.name)}
                errorText={form.errors.name}
              >
                <Input
                  type="name"
                  id="name"
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
                  placeholder="you@example.com"
                  autoComplete="off"
                  value={form.data.email}
                  onChange={(e) => form.setData("email", e.target.value)}
                />
              </Field>
              <Field
                label="Password"
                required
                invalid={Boolean(form.errors.password)}
                errorText={form.errors.password}
              >
                <PasswordInput
                  id="password"
                  placeholder="Your password"
                  value={form.data.password}
                  onChange={(e) => form.setData("password", e.target.value)}
                />
              </Field>
              <Field
                label="Confirm Password"
                required
                invalid={Boolean(form.errors.password_confirmation)}
                errorText={form.errors.password_confirmation}
              >
                <PasswordInput
                  id="password_confirmation"
                  placeholder="Confirm your password"
                  value={form.data.password_confirmation}
                  onChange={(e) => form.setData("password_confirmation", e.target.value)}
                />
              </Field>
            </VStack>
          </Card.Body>
          <Card.Footer>
            <Button w="full" type="submit" loading={form.processing}>
              Register
            </Button>
          </Card.Footer>
        </Card.Root>
        <Text textAlign="center" mt={5}>
          Already have an account? <Link href="/login">Login here</Link>
        </Text>
      </Container>
    </Center>
  );
}

Page.layout = (page: ReactNode) => <Fragment>{page}</Fragment>;

export default Page;
