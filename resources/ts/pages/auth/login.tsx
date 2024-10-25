import { Card, Center, chakra, Container, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Fragment, ReactNode } from "react";
import { Logo } from "~/components";
import { Alert } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Field } from "~/components/ui/field";
import { PasswordInput } from "~/components/ui/password-input";
import { useFortifyFeature } from "~/hooks";

type PageProps = {
  status?: string;
};

function Page(props: PageProps) {
  const feature = useFortifyFeature();

  const form = useForm({
    email: "",
    password: "",
    remember: true
  });

  return (
    <Center minH="100vh">
      <Head>
        <title>Login</title>
      </Head>

      <Container fluid maxWidth={{ base: "full", md: "xl" }}>
        <Center pb={8}>
          <Logo h={14} />
        </Center>
        <Card.Root
          as={chakra.form}
          onSubmit={(e) => {
            e.preventDefault();

            form.post("/login");
          }}
        >
          <Card.Body>
            <VStack align="stretch" gap={4}>
              {props.status && <Alert status="info">{props.status}</Alert>}
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
              <HStack justify="space-between">
                <Checkbox
                  checked={form.data.remember}
                  onCheckedChange={(e) => form.setData("remember", !!e.checked)}
                >
                  Remember me
                </Checkbox>
                {feature.resetPasswords && <Link href="/forgot-password">Forgot password?</Link>}
              </HStack>
            </VStack>
          </Card.Body>
          <Card.Footer>
            <Button w="full" type="submit" loading={form.processing}>
              Sign in
            </Button>
          </Card.Footer>
        </Card.Root>
        {feature.registration && (
          <Text textAlign="center" mt={5}>
            Do not have an account yet? <Link href="/register">Create account</Link>
          </Text>
        )}
      </Container>
    </Center>
  );
}

Page.layout = (page: ReactNode) => <Fragment>{page}</Fragment>;

export default Page;
