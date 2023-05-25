import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardProps,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  chakra
} from "@chakra-ui/react";
import { useForm } from "@inertiajs/react";
import { PasswordInput } from "~/components/forms";
import { UseUserReturn } from "~/hooks";

type PersonalInfoCardProps = CardProps & {
  user: UseUserReturn;
};

export const PersonalInfoCard = ({ user, ...props }: PersonalInfoCardProps) => {
  const form = useForm({
    name: user.name || "",
    email: user.email || ""
  });

  return (
    <Card
      as={chakra.form}
      variant="elevated"
      onSubmit={(e) => {
        e.preventDefault();

        form.put("/user/profile-information");
      }}
      w="full"
      {...props}
    >
      <CardBody>
        <VStack align="stretch" spacing={4}>
          <FormControl isRequired isInvalid={Boolean(form.errors.email)}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="name"
              id="name"
              placeholder="Your bane"
              autoComplete="off"
              value={form.data.name}
              onChange={(e) => form.setData("name", e.target.value)}
            />
            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
        </VStack>
      </CardBody>
      <CardFooter justifyContent="end">
        <Button type="submit" isLoading={form.processing} loadingText="Saving">
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};
