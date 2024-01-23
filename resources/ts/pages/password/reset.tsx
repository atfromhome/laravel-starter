import {
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
  VStack,
  chakra
} from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";
import { Logo } from "~/components";
import { PasswordInput } from "~/components/forms";

type PageProps = {
  email: string;
  token: string;
  status?: string;
  [key: string]: unknown;
};

export default function Page(props: PageProps) {
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

      <Container>
        <Center pb={8}>
          <Logo h={14} />
        </Center>
        <Card
          as={chakra.form}
          variant="elevated"
          onSubmit={(e) => {
            e.preventDefault();

            form.post("/reset-password");
          }}
        >
          <CardBody>
            <VStack align="stretch" spacing={4}>
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
                <FormLabel htmlFor="password">New Password</FormLabel>
                <PasswordInput
                  id="password"
                  placeholder="Your new password"
                  value={form.data.password}
                  onChange={(e) => form.setData("password", e.target.value)}
                />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={Boolean(form.errors.password_confirmation)}>
                <FormLabel htmlFor="password_confirmation">Confirm New Password</FormLabel>
                <PasswordInput
                  id="password_confirmation"
                  placeholder="Confirm your new password"
                  value={form.data.password_confirmation}
                  onChange={(e) => form.setData("password_confirmation", e.target.value)}
                />
                <FormErrorMessage>{form.errors.password_confirmation}</FormErrorMessage>
              </FormControl>
              <chakra.input type="hidden" value={form.data.token} />
            </VStack>
          </CardBody>
          <CardFooter>
            <Button w="full" type="submit" isLoading={form.processing}>
              Reset Password
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </Center>
  );
}
