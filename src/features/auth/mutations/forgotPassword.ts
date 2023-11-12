import { resolver } from "@blitzjs/rpc";
import db from "db";
import { ForgotPasswordInput } from "../schemas";
import { regenerateToken } from "@/utils/blitz-utils";
import { TokenType } from "@prisma/client";
import { sendEmail } from "~/email/sendEmail";
import EmailTemplateResetPassword from "~/email/react-email/emails/reset-password";
import { URL_ORIGIN } from "@/config";
import React from "react";

export default resolver.pipe(resolver.zod(ForgotPasswordInput), async ({ email }) => {
  // 1. Get the user
  const user = await db.user.findFirst({ where: { email: email.toLowerCase() } });

  if (!user) {
    await new Promise((resolve) => setTimeout(resolve, 750));
  }

  if (user) {
    const token = await regenerateToken({
      tokenType: TokenType.RESET_PASSWORD,
      userId: user.id,
      userEmail: user.email,
    });

    let resetPasswordUrl = `${URL_ORIGIN}/auth/reset-password?token=${token}`;

    await sendEmail({
      to: user.email,
      subject: "Reset your password for Eventio",
      react: React.createElement(EmailTemplateResetPassword, {
        props: {
          resetPasswordUrl,
        },
      }),
    });
  }

  return true;
});
