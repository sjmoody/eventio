import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";

import { Vertical } from "mantine-layout-components";
import { MainAuthenticationForm } from "src/core/components/MainAuthenticationForm";
import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";
import { Button } from "@mantine/core";
import { useMutation } from "@blitzjs/rpc";
import adminOnlyMutation from "@/features/auth/mutations/adminOnlyMutation";

const Home: BlitzPage = () => {
  const user = useCurrentUser();
  const [$adminOnlyMutation] = useMutation(adminOnlyMutation);

  return (
    <Layout title="Home">
      {user && user.isAdmin && (
        <Vertical>
          <Button
            onClick={() => {
              $adminOnlyMutation({});
            }}
          >
            Admin only
          </Button>
        </Vertical>
      )}
      {!user && <MainAuthenticationForm />}
    </Layout>
  );
};

export default Home;
