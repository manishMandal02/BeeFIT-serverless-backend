import { createTransport } from 'nodemailer';
import { welcomeEmailTemplate } from '../view/email/welcomeEmail';
import { otpEmailTemplate } from '../view/email/otpEmail';

if (!process.env.SMTP_USERNAME || !process.env.SMTP_PASSWORD) {
  throw new Error('evn not set, email smtp');
}

const transporter = createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

//otp email
const sendOTPEmail = async (email: string, OTP: string) => {
  const mailOptions = {
    sender: 'InOffice <support@inoffice.today>',
    from: ' support@inoffice.today',
    to: email,
    subject: `Your otp for FarmFresh`,
    html: otpEmailTemplate(OTP),
  };

  const response = await transporter.sendMail(mailOptions);
  return { response };
};

//welcome email
const sendWelcomeEmail = async (email: string, firstName: string) => {
  const mailOptions = {
    sender: 'InOffice <support@inoffice.today>',
    from: ' support@inoffice.today',
    to: email,
    subject: `Welcome to FarmFresh`,
    html: welcomeEmailTemplate(firstName),
  };

  const response = await transporter.sendMail(mailOptions);
  return { response };
};

export { sendOTPEmail, sendWelcomeEmail };
