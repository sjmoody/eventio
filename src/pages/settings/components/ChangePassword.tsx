import changePassword from "@/features/auth/mutations/changePassword";
import changePasswordForLoggedIn from "@/features/auth/mutations/changePasswordForLoggedIn";
import { ChangePasswordInput, ChangePasswordInputType } from "@/features/auth/schemas";
import { useMutation } from "@blitzjs/rpc";
import { Button, Card, PasswordInput, Text, Title } from "@mantine/core";
import { Form, useForm, zodResolver } from "@mantine/form";
import { Vertical } from "mantine-layout-components";
import React from "react";

export const ChangePassword = () => {
  // const [$resetPassword, { isSuccess, isLoading }] = useMutation(resetPassword);
  const [$changePasswordForLoggedIn, { isSuccess, isLoading }] =
    useMutation(changePasswordForLoggedIn);

  const form = useForm<ChangePasswordInputType>({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
    validateInputOnBlur: true,
    validate: zodResolver(ChangePasswordInput),
  });

  return (
    <Card withBorder w="100%" maw={300}>
      {isSuccess && <Text>Password successfully changed.</Text>}
      {!isSuccess && (
        <Vertical fullW>
          <Title order={4}>Change Password</Title>
          <Vertical fullW>
            <Form
              style={{ width: "100%" }}
              form={form}
              onSubmit={async (values) => {
                await $changePasswordForLoggedIn(values);
              }}
            >
              <Vertical fullW>
                <PasswordInput
                  w="100%"
                  withAsterisk
                  label="Current Password"
                  {...form.getInputProps("currentPassword")}
                />
                <PasswordInput
                  w="100%"
                  withAsterisk
                  label="New Password"
                  {...form.getInputProps("newPassword")}
                />
                <PasswordInput
                  w="100%"
                  withAsterisk
                  label="Confirm New Password"
                  {...form.getInputProps("newPasswordConfirmation")}
                />

                <Button loading={isLoading} disabled={!form.isValid()} type="submit">
                  Change Password
                </Button>
              </Vertical>
            </Form>
          </Vertical>
        </Vertical>
      )}
    </Card>
  );
};
