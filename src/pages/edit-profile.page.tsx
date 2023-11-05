import React from "react";
import Layout from "@/core/layouts/Layout";
import { BlitzPage, Routes } from "@blitzjs/next";
import { Vertical } from "mantine-layout-components";
import { Text } from "@mantine/core";
import { EditProfileForm } from "@/features/users/forms/EditProfileForm";
import { useRouter } from "next/router";
import { useForm, zodResolver } from "@mantine/form";
import { UpdateProfileInput, updateProfileInputType } from "@/features/users/schemas";
import { useMutation, useQuery } from "@blitzjs/rpc";
import updateProfile from "@/features/users/mutations/updateProfile";
import { showNotification } from "@mantine/notifications";
import getUserForEditingProfile from "@/features/users/queries/getUserForEditingProfile";

export const EditProfilePage: BlitzPage = () => {
  const [$updateProfile, { isLoading }] = useMutation(updateProfile);

  const router = useRouter();

  const [user] = useQuery(getUserForEditingProfile, {}, { enabled: false });

  const form = useForm<updateProfileInputType>({
    initialValues: {
      name: user?.name || "",
      username: user?.username || "",
      bio: user?.bio || ",",
    },
    validate: zodResolver(UpdateProfileInput),
    validateInputOnBlur: true,
  });

  return (
    <Layout>
      <Vertical>
        <EditProfileForm
          form={form}
          onSubmit={async (values) => {
            await $updateProfile(values);
            const { username } = values;
            if (username) {
              router.push(Routes.ProfilePage({ username }));
              showNotification({
                color: "green",
                title: "Success",
                message: "Profile updated!",
              });
            }
          }}
          isSubmitting={isLoading}
        />
      </Vertical>
    </Layout>
  );
};

export default EditProfilePage;
