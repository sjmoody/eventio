import { useMutation } from "@blitzjs/rpc";

import signup from "@/features/auth/mutations/signup";
import { SignupInput, SignupInputType } from "@/features/auth/schemas";
import {
  Paper,
  Text,
  Group,
  Divider,
  Stack,
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Button,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Vertical } from "mantine-layout-components";

import { SocialButtonsAuth } from "./SocialButtonsAuth";
import { ReactFC } from "~/types";

export const SignupForm: ReactFC<{
  toggle: () => void;
}> = ({ toggle }) => {
  const [$signup, { isLoading }] = useMutation(signup);

  const form = useForm<SignupInputType>({
    validate: zodResolver(SignupInput),
    validateInputOnBlur: true,
    validateInputOnChange: ["terms"],
  });

  return (
    <Vertical mih="100vh" fullH fullW center>
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" fw={500}>
          Welcome to Remote Martech Jobs. You can register with
        </Text>

        <SocialButtonsAuth />

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form
          onSubmit={form.onSubmit((values) => {
            $signup(values);
          })}
        >
          <Stack>
            <TextInput
              required
              label="Name"
              placeholder="Your name"
              {...form.getInputProps("name")}
              radius="md"
            />

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              {...form.getInputProps("email")}
              radius="md"
            />
            <Vertical fullW spacing="3px">
              <PasswordInput
                w="100%"
                required
                label="Password"
                placeholder="Your password"
                {...form.getInputProps("password")}
                radius="md"
              />
            </Vertical>

            <Checkbox
              label="I accept terms and conditions"
              {...form.getInputProps("terms", { type: "checkbox" })}
            />
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor component="button" type="button" c="dimmed" size="xs" onClick={toggle}>
              Already have an account? Login
            </Anchor>
            <Button disabled={!form.isValid()} loading={isLoading} type="submit" radius="xl">
              Register
            </Button>
          </Group>
        </form>
      </Paper>
    </Vertical>
  );
};
