import nodemailer from "nodemailer";
import { env } from "process";
import { IMailAdapter, SendMailData } from "../interfaces/IMailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "86b0798bdabd7e",
    pass: "fd8ab67565cc3f"
  }
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({subject,body}: SendMailData) {
    await transport.sendMail({
      from: env.EMAIL_SYS,
      to: env.EMAIL_SUP,
      subject: subject,
      html: body
    })  
  };
}