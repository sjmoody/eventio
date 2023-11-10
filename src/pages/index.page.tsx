import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import { MainAuthenticationForm } from "src/core/components/MainAuthenticationForm";
import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";
import { openContextModal } from "@mantine/modals";
import { GlobalModal } from "@/modals";
import { Button } from "@mantine/core";
import { confirmDelete } from "@/utils/mantine-utils";
import { useMutation } from "@blitzjs/rpc";

const Home: BlitzPage = () => {
  const user = useCurrentUser();

  const deleteAccountMutation = () => {
    console.log("Account deleted");
  };

  return (
    <Layout title="Home">
      {!user && <MainAuthenticationForm />}
      <Button
        color="red.8"
        onClick={() => {
          confirmDelete(
            () => {
              deleteAccountMutation();
            },
            {
              confirmLabel: "Delete Account frfr",
            }
          );
        }}
      >
        Delete Account
      </Button>
    </Layout>
  );
};

export default Home;
