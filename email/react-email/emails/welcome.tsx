import { Body, Container, Head, Html, Preview, Section, Text } from "@react-email/components";
import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { emailStyles } from "../styles";
import { MainButton } from "../components/MainButton";

const defaultProps = {
  name: "test user",
  emailVerifyUrl: "http://localhost:3001",
};

export const EmailTemplateWelcome: React.FC<{
  props: {
    name?: string | null;
    emailVerifyUrl?: string | null;
  };
}> = ({ props = defaultProps }) => {
  const { name } = props;
  const greeting = name ? `Hello ${name}` : `Hello there`;
  return (
    <Html>
      <Head />
      <Preview>Welcome to Remote Martech Jobs</Preview>
      <Body style={emailStyles.main}>
        <Container style={emailStyles.container}>
          <Section style={emailStyles.box}>
            <Header />
            <Text style={emailStyles.paragraph}>{greeting}, welcome to our platform</Text>
            <MainButton href="remotemartechjobs.com/login">
              Click here to verify your account
            </MainButton>
            <Footer />
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
export default EmailTemplateWelcome;
