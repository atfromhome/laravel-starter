import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardProps,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  chakra,
  useBoolean
} from "@chakra-ui/react";
import { useForm } from "@inertiajs/react";

type UpdatePasswordCardProps = CardProps;

export const UpdatePasswordCard = ({ ...props }: UpdatePasswordCardProps) => {
  const [showPassword, handleShowPassword] = useBoolean(false);

  const form = useForm({
    password: "",
    current_password: "",
    password_confirmation: ""
  });

  return (
    <Card
      as={chakra.form}
      variant="elevated"
      onSubmit={(e) => {
        e.preventDefault();

        form.put("/user/password", {
          onSuccess: () => form.setDefaults()
        });
      }}
      w="full"
      {...props}
    >
      <CardBody>
        <VStack align="stretch" spacing={4}>
          <FormControl isRequired isInvalid={Boolean(form.errors.current_password)}>
            <FormLabel htmlFor="current_password">Current Password</FormLabel>
            <Input
              id="current_password"
              type={showPassword ? "text" : "password"}
              placeholder="Your current password"
              value={form.data.current_password}
              onChange={(e) => form.setData("current_password", e.target.value)}
            />
            <FormErrorMessage>{form.errors.current_password}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={Boolean(form.errors.password)}>
            <FormLabel htmlFor="password">New Password</FormLabel>
            <Input
              id="password"
              placeholder="Your new password"
              type={showPassword ? "text" : "password"}
              value={form.data.password}
              onChange={(e) => form.setData("password", e.target.value)}
            />
            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={Boolean(form.errors.password_confirmation)}>
            <FormLabel htmlFor="password_confirmation">Confirm New Password</FormLabel>
            <Input
              id="password_confirmation"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your new password"
              value={form.data.password_confirmation}
              onChange={(e) => form.setData("password_confirmation", e.target.value)}
            />
            <FormErrorMessage>{form.errors.password_confirmation}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <Checkbox
              checked={showPassword}
              onChange={handleShowPassword.toggle}
            >
              Show password
            </Checkbox>
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
