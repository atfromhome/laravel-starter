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
  Text,
  VStack,
  chakra
} from "@chakra-ui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Logo } from "~/components";
import { PasswordInput } from "~/components/forms";

export default function Page() {
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

      <Container>
        <Center pb={8}>
          <Logo h={14} />
        </Center>
        <Card
          as={chakra.form}
          variant="elevated"
          onSubmit={(e) => {
            e.preventDefault();

            form.post("/register");
          }}
        >
          <CardBody>
            <VStack align="stretch" spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="name"
                  id="name"
                  placeholder="Your name"
                  autoComplete="off"
                  value={form.data.name}
                  onChange={(e) => form.setData("name", e.target.value)}
                />
              </FormControl>
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
              <FormControl isRequired isInvalid={Boolean(form.errors.password_confirmation)}>
                <FormLabel htmlFor="password_confirmation">Confirm Password</FormLabel>
                <PasswordInput
                  id="password_confirmation"
                  placeholder="Confirm your password"
                  value={form.data.password_confirmation}
                  onChange={(e) => form.setData("password_confirmation", e.target.value)}
                />
                <FormErrorMessage>{form.errors.password_confirmation}</FormErrorMessage>
              </FormControl>
            </VStack>
          </CardBody>
          <CardFooter>
            <Button w="full" type="submit" isLoading={form.processing}>
              Register
            </Button>
          </CardFooter>
        </Card>
        <Text color="primary.400" align="center" mt={5}>
          Already have an account?{" "}
          <Button as={Link} href="/login" variant="link" color="primary.400">
            Login here
          </Button>
        </Text>
      </Container>
    </Center>
  );
}
