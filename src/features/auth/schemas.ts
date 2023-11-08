import { z } from "zod";

export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim());

export const password = z
  .string()
  .min(6)
  .max(100)
  .transform((str) => str.trim());

export const name = z.string().min(2);

export const SignupInput = z.object({
  email,
  password,
  name: name,
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export const LoginInput = z.object({
  email,
  password,
});

export const ForgotPasswordInput = z.object({
  email,
});

export type ForgotPasswordInputType = z.infer<typeof ForgotPasswordInput>;

export let ResetPasswordInput = z
  .object({
    password: password,
    passwordConfirmation: password,
    token: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // set the path of the error
  });

export type ResetPasswordInputType = z.infer<typeof ResetPasswordInput>;
