import { Body, Container, Head, Html, Preview, Section, Text } from "@react-email/components";
import * as React from "react";
import { MainButton } from "../components/MainButton";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { emailStyles } from "../styles";

const defaultProps = {
  name: "test user",
  emailVerifyUrl: "http://localhost:3001",
};

export const EmailTemplateVerifyEmail: React.FC<{
  props: {
    name?: string | null;
    emailVerifyUrl?: string;
  };
}> = ({ props = defaultProps }) => {
  const { name, emailVerifyUrl } = props;

  const greeting = name ? `Hello ${name}` : `Hello there`;
  return (
    <Html>
      <Head />
      <Preview>Please verify your email for Remote Martech Jobs</Preview>
      <Body style={emailStyles.main}>
        <Container style={emailStyles.container}>
          <Section style={emailStyles.box}>
            <Header />

            <Text style={emailStyles.paragraph}>{greeting}, please confirm your email address</Text>
            <MainButton href={emailVerifyUrl}>Click here to verify your account</MainButton>
            <Footer />
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
export default EmailTemplateVerifyEmail;
