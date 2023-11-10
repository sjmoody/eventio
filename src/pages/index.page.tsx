import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import { MainAuthenticationForm } from "src/core/components/MainAuthenticationForm";
import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";
import { openContextModal } from "@mantine/modals";
import { GlobalModal } from "@/modals";
import { Button } from "@mantine/core";

const Home: BlitzPage = () => {
  const user = useCurrentUser();

  return (
    <Layout title="Home">
      {!user && <MainAuthenticationForm />}
      <Button
        color="red"
        onClick={() => {
          openContextModal({
            modal: GlobalModal.reportBug,
            title: "Report a Bug",

            innerProps: {},
          });
        }}
      >
        Click here to report a bug
      </Button>
      <Button
        onClick={() => {
          openContextModal({
            modal: GlobalModal.stackedModal,
            title: "Stacked Modal",
            innerProps: {
              price: 120,
            },
          });
        }}
      >
        Click here to go see a stacked modal
      </Button>

      <Button
        onClick={() => {
          openContextModal({
            modal: GlobalModal.becomePro,
            title: "Become Pro",
            innerProps: {
              price: 120,
            },
          });
        }}
      >
        Click here to go pro
      </Button>
    </Layout>
  );
};

export default Home;
