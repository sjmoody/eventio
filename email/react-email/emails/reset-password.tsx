import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { MainButton } from "../components/MainButton";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { emailStyles } from "../styles";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3001/";

const defaultProps = {
  resetPasswordUrl: "http://localhost:3001",
};

export const EmailTemplateResetPassword: React.FC<{
  props: {
    resetPasswordUrl?: string;
  };
}> = ({ props = defaultProps }) => {
  const { resetPasswordUrl } = props;

  return (
    <Html>
      <Head />
      <Preview>Reset your password for Eventio</Preview>
      <Body style={emailStyles.main}>
        <Container style={emailStyles.container}>
          <Section style={emailStyles.box}>
            <Header />
            <Text style={emailStyles.paragraph}>
              We received a request to reset your password. Click the button to reset it. If you
              didn't make this request you can ignore this email.
            </Text>
            <MainButton href={resetPasswordUrl}>Click here to reset your password</MainButton>
            <Footer />
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
export default EmailTemplateResetPassword;
