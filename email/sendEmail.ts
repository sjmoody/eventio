import { isDev } from "@/config";
import React from "react";
import { Resend } from "resend";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";
import StripeWelcomeEmail from "./react-email/emails/stripe-welcome";
import StripperWelcomeEmail from "./react-email/emails/stripper-welcome";
import { nodemailerAppTransport } from "./transports/nodemailer-app-transport";
import { render } from "@react-email/render";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ subject, to, html }) => {
  let react = React.createElement(StripperWelcomeEmail, {
    content: "Welcome to this wonderful world of email",
    buttonText: "Click here to do something",
  });

  if (isDev) {
    const html = render(react);
    let messageDev: CreateEmailOptions = {
      from: "onboarding@resend.dev",
      to,
      subject,
      html,
    };

    return nodemailerAppTransport.sendMail(messageDev);
  }

  let messageProd: CreateEmailOptions = {
    from: "onboarding@resend.dev",
    to,
    subject,
    react,
  };
  return resend.emails.send(messageProd);
};
