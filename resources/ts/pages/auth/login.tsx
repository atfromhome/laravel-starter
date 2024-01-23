import {
  Alert,
  AlertIcon,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
  chakra
} from "@chakra-ui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Fragment, ReactNode } from "react";
import { Logo } from "~/components";
import { PasswordInput } from "~/components/forms";
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

      <Container>
        <Center pb={8}>
          <Logo h={14} />
        </Center>
        <Card
          as={chakra.form}
          variant="elevated"
          onSubmit={(e) => {
            e.preventDefault();

            form.post("/login");
          }}
        >
          <CardBody>
            <VStack align="stretch" spacing={4}>
              {props.status && (
                <Alert status="info" rounded="md">
                  <AlertIcon />
                  {props.status}
                </Alert>
              )}
              <FormControl isRequired isInvalid={Boolean(form.errors.email)}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  autoComplete="off"
                  value={form.data.email}
                  onChange={(e) => form.setData("email", e.target.value)}
                />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={Boolean(form.errors.password)}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <PasswordInput
                  id="password"
                  placeholder="Your password"
                  value={form.data.password}
                  onChange={(e) => form.setData("password", e.target.value)}
                />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
              <HStack justify="space-between">
                <Checkbox
                  checked={form.data.remember}
                  onChange={(e) => form.setData("remember", e.target.checked)}
                >
                  Remember me
                </Checkbox>
                {feature.resetPasswords && (
                  <Button variant="link" as={Link} href="/forgot-password">
                    Forgot password?
                  </Button>
                )}
              </HStack>
            </VStack>
          </CardBody>
          <CardFooter>
            <Button w="full" type="submit" isLoading={form.processing}>
              Sign in
            </Button>
          </CardFooter>
        </Card>
        {feature.registration && (
          <Text color="primary.400" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Button as={Link} href="/register" variant="link" color="primary.400">
              Create account
            </Button>
          </Text>
        )}
      </Container>
    </Center>
  );
}

Page.layout = (page: ReactNode) => <Fragment>{page}</Fragment>;

export default Page;
