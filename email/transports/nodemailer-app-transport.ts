import * as nodemailer from "nodemailer";

let user = process.env.NODEMAILER_LOCAL_USER; // add this to .env.local from the NodemailerApp
let pass = process.env.NODEMAILER_LOCAL_PASS; // add this to .env.local from the NodemailerApp

export const nodemailerAppTransport = nodemailer.createTransport({
  host: "127.0.0.1",
  port: 1025,
  auth: {
    user: user,
    pass: pass,
  },
});
