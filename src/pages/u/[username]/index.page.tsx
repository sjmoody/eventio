import React from "react";
import Layout from "@/core/layouts/Layout";
import { BlitzPage, Routes } from "@blitzjs/next";
import { Vertical } from "mantine-layout-components";
import { Alert, Box, Button, Group, Modal, Text, TextInput, Textarea, Image } from "@mantine/core";
import { useStringParam } from "@/utils/utils";
import { useMutation, useQuery } from "@blitzjs/rpc";
import getUserForProfile from "@/features/users/queries/getUserForProfile";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { useDisclosure } from "@mantine/hooks";
import { Form, useForm, zodResolver } from "@mantine/form";
import updateProfile from "@/features/users/mutations/updateProfile";
import { UpdateProfileInput, updateProfileInputType } from "@/features/users/schemas";
import { notifications, showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import { EditProfileForm } from "@/features/users/forms/EditProfileForm";
import { IconAlertCircle } from "@tabler/icons-react";
import requestVerificationEmail from "@/features/auth/mutations/requestVerificationEmail";
import { getUploadthingUrl } from "@/utils/image.utils";

export const ProfilePage: BlitzPage = () => {
  const username = useStringParam("username");

  const [user] = useQuery(getUserForProfile, { username: username || "" }, { enabled: !!username });

  const form = useForm<updateProfileInputType>({
    initialValues: {
      name: user?.name || "",
      username: user?.username || "",
      bio: user?.bio || "",
      avatarImageKey: user?.avatarImageKey || "",
      coverImageKey: user?.coverImageKey || "",
    },
    validate: zodResolver(UpdateProfileInput),
    validateInputOnBlur: true,
  });

  const router = useRouter();
  const [$updateProfile, { isLoading }] = useMutation(updateProfile);

  const [$requestVerificationEmail, { isLoading: isSendingEmail, isSuccess }] =
    useMutation(requestVerificationEmail);

  const [opened, { open, close }] = useDisclosure(false);

  const currentUser = useCurrentUser();
  const isOwner = currentUser?.id === user?.id;

  if (!user) return <Text>User not found :o </Text>;

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          close();
          form.reset();
        }}
        title="Edit Profile"
      >
        <EditProfileForm
          form={form}
          onSubmit={async (values) => {
            console.log("values", values);
            await $updateProfile(values);
            const { username } = values;
            if (username !== user.username) {
              if (username) {
                router.push(Routes.ProfilePage({ username }));
              }
            }
            showNotification({
              color: "green",
              title: "Success",
              message: "Profile updated!",
            });
            close();
          }}
          isSubmitting={isLoading}
        />
      </Modal>

      <Layout>
        <Vertical>
          {isOwner && !currentUser?.emailVerifiedAt && (
            <Alert
              variant="outline"
              icon={<IconAlertCircle size="1rem" />}
              title={isSuccess ? "Email Sent" : "Warning"}
              color="red"
            >
              <Vertical>
                {!isSuccess && (
                  <>
                    <Text>
                      Your email is not verified. Please check your inbox for the welcome email we
                      have sent you.
                    </Text>
                    <Button
                      loading={isSendingEmail}
                      onClick={async () => {
                        await $requestVerificationEmail();
                        notifications.show({
                          color: "green",
                          title: "Success!",
                          message: "Email Sent",
                        });
                      }}
                      size="xs"
                      color="red"
                      variant="light"
                    >
                      Resend email
                    </Button>
                  </>
                )}
                {isSuccess && (
                  <Text>
                    The email has been sent and should arrive shortly. Please check your spam
                    folder.
                  </Text>
                )}
              </Vertical>
            </Alert>
          )}
          {isOwner && <Button onClick={open}>Edit profile</Button>}
          <Image width="300px" src={getUploadthingUrl(user.coverImageKey)} />
          <Text>Hello {user.name}</Text>
          <Text>{user.bio}</Text>
        </Vertical>
      </Layout>
    </>
  );
};

export default ProfilePage;
