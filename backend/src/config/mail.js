import "dotenv/config";

export default {
  host: "smtp.sendgrid.net",
  port: 465,
  secure: true,
  auth: {
    user: "apikey",
    pass: process.env.SEND_EMAIL_PASS,
  },
  default: {
    from: `Taskify | <${process.env.EMAIL}>`,
  },
};
