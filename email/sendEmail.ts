import { isDev } from "@/config";
import { Resend } from "resend";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ subject, to, html }) => {
  let message: CreateEmailOptions = {
    from: "onboarding@resend.dev",
    to,
    subject,
    html,
  };

  if (isDev) {
    const previewEmail = (await import("preview-email")).default;
    await previewEmail(message);
  } else {
    await resend.emails.send(message);
  }
};
