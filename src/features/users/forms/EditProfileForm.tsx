import React from "react";
import { updateProfileInputType } from "../schemas";
import { Form, UseFormReturnType } from "@mantine/form";
import { Button, TextInput, Textarea } from "@mantine/core";
import { Vertical } from "mantine-layout-components";
import { ReactFC } from "~/types";
import { UploadButton } from "@/core/components/UploadThing";
import { showNotification } from "@mantine/notifications";

export const EditProfileForm: ReactFC<{
  form: UseFormReturnType<updateProfileInputType>;
  onSubmit: (values: updateProfileInputType) => Promise<void>;
  isSubmitting: boolean;
}> = ({ onSubmit, form, isSubmitting }) => {
  return (
    <Form form={form} onSubmit={onSubmit}>
      <Vertical fullW>
        <TextInput
          w="100%"
          required
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
          radius="md"
        />

        <TextInput
          w="100%"
          required
          label="username"
          placeholder="username"
          {...form.getInputProps("username")}
          radius="md"
        />

        <Textarea
          w="100%"
          required
          label="Bio"
          placeholder="Bio"
          {...form.getInputProps("bio")}
          radius="md"
        />
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            const key = res?.[0]?.key;
            console.log("Files: ", res);
            showNotification({
              color: "green",
              title: "Success",
              message: "File uploaded!",
            });
            form.setFieldValue("avatarImageKey", key);
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            console.log(error);
            showNotification({
              color: "red",
              title: "Error",
              message: "Error uploading file",
            });
          }}
        />
        <Button disabled={!form.isValid()} loading={isSubmitting} type="submit">
          Save
        </Button>
      </Vertical>
    </Form>
  );
};
