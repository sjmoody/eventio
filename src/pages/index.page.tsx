import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";
import { Title } from "@mantine/core";

const Home: BlitzPage = () => {
  const user = useCurrentUser();

  return (
    <Layout title="Home">
      <Title order={4}>This is the home page</Title>
    </Layout>
  );
};

export default Home;
