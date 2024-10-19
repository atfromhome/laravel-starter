import {
  Alert,
  AlertIcon,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
  chakra
} from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";
import { Fragment, ReactNode } from "react";
import { Logo } from "~/components";

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

      <Container>
        <Center pb={8}>
          <Logo h={14} />
        </Center>
        <Card
          as={chakra.form}
          variant="elevated"
          onSubmit={(e) => {
            e.preventDefault();

            form.post("/forgot-password");
          }}
        >
          <CardBody>
            <VStack align="stretch" spacing={4}>
              <Text>
                Forgot your password? No problem. Just let us know your email address and we will
                email you a password reset link that will allow you to choose a new one.
              </Text>

              {props.status && (
                <Alert rounded="md">
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
            </VStack>
          </CardBody>
          <CardFooter>
            <Button w="full" type="submit" isLoading={form.processing}>
              Email Password Reset Link
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </Center>
  );
}

Page.layout = (page: ReactNode) => <Fragment>{page}</Fragment>;

export default Page;
