"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const process_1 = require("process");
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "86b0798bdabd7e",
        pass: "fd8ab67565cc3f"
    }
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: process_1.env.EMAIL_SYS,
            to: process_1.env.EMAIL_SUP,
            subject: subject,
            html: body
        });
    }
    ;
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
