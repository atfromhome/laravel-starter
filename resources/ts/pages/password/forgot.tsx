import { Card, Center, chakra, Container, Input, Text, VStack } from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";
import { Fragment, ReactNode } from "react";
import { Logo } from "~/components";
import { Alert } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";

type PageProps = {
  status?: string;
};

function Page(props: PageProps) {
  const form = useForm({
    email: ""
  });

  return (
    <Center minH="100vh">
      <Head>
        <title>Forgot Password</title>
      </Head>

      <Container fluid maxWidth={{ base: "full", md: "xl" }}>
        <Center pb={8}>
          <Logo h={14} />
        </Center>
        <Card.Root
          as={chakra.form}
          onSubmit={(e) => {
            e.preventDefault();

            form.post("/forgot-password");
          }}
        >
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <Text>
                Forgot your password? No problem. Just let us know your email address and we will
                email you a password reset link that will allow you to choose a new one.
              </Text>

              {props.status && <Alert rounded="md">{props.status}</Alert>}

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
            </VStack>
          </Card.Body>
          <Card.Footer>
            <Button w="full" type="submit" loading={form.processing}>
              Email Password Reset Link
            </Button>
          </Card.Footer>
        </Card.Root>
      </Container>
    </Center>
  );
}

Page.layout = (page: ReactNode) => <Fragment>{page}</Fragment>;

export default Page;
