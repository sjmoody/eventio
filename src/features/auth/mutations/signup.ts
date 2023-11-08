import { SecurePassword } from "@blitzjs/auth/secure-password";
import { resolver } from "@blitzjs/rpc";
import db from "db";
import { Role } from "types";

import { SignupInput } from "../schemas";
import { sendEmail } from "~/email/sendEmail";

import React from "react";
import { PrismaError } from "@/utils/blitz-utils";
import { EmailTemplateWelcome } from "~/email/react-email/emails/welcome";

export default resolver.pipe(resolver.zod(SignupInput), async (params, ctx) => {
  const { email, name, password } = params;
  const hashedPassword = await SecurePassword.hash(password.trim());

  try {
    const user = await db.user.create({
      data: { email: email.toLowerCase().trim(), name, hashedPassword, role: "USER" },
      select: { id: true, name: true, email: true, role: true },
    });

    if (user) {
      await sendEmail({
        to: user.email,
        subject: "Welcome to Eventio",
        react: React.createElement(EmailTemplateWelcome, {
          props: {
            name: user.name,
            // emailVerifyUrl: "", might be needed, bug found in lesson
          },
        }),
      });

      await ctx.session.$create({ userId: user.id, role: user.role as Role });
      return user;
    }
  } catch (err) {
    throw new PrismaError(err.message, err.code, err.meta);
  }

  return null;
});
