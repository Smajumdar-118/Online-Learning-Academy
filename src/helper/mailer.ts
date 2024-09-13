import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';


export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const token = await bcrypt.hash(userId.toString(), 10);
    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {$set:{
        verifyToken: token,
        verifyTokenExpiry: Date.now() + 3600000,
      }});
    } else if (emailType === 'RESET') {
      await User.findByIdAndUpdate(userId, {$set: {
        forgotPasswordToken: token,
        forgotPasswordExpiry: Date.now() + 3600000,
      }});
    }

    // Function to generate the email body
    const generateEmailBody = (emailType: string, url: string) => {
      const isVerify = emailType === 'VERIFY';

      return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">${isVerify ? 'Verify Your Email Address' : 'Reset Your Password'}</h2>
          <p>
            ${isVerify ? 'Thank you for registering! Please click the button below to verify your email address.' : 'It looks like you requested a password reset. Click the button below to reset your password.'}
          </p>
          <p>
            <a href="${url}" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #FFF; text-decoration: none; border-radius: 5px;">
              ${isVerify ? 'Verify Email' : 'Reset Password'}
            </a>
          </p>
          <p>
            Or copy and paste this URL into your browser:
            <br>
            <a href="${url}" style="color: #007BFF;">${url}</a>
          </p>
          <p>
            If you did not request this, please ignore this email.
          </p>
          <p style="color: #777;">
            Regards,<br>
            Sayan Majumdar
          </p>
        </div>
      `;
    };

    // Create the transporter
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sayanmajumdar0407@gmail.com', 
        pass: process.env.GMAIL_PASS, 
      },
    });

   




    // URL to be included in the email
    const url =
      emailType === 'VERIFY'
        ? `${process.env.DOMAIN}/verifyemail?token=${token}`
        : `${process.env.DOMAIN}/ForgetPass?token=${token}`;

    // Create mail options
    const mailOptions = {
      from: 'sayanmajumdar@gmail.in', // sender address
      to: email, // list of receivers
      subject: emailType === 'VERIFY' ? 'Verify Your Email Address' : 'Reset Your Password', // Subject line
      text: "Hello world?", // plain text body
      html: generateEmailBody(emailType, url), // html body
    };

    // Send email
    const info = await transport.sendMail(mailOptions);
    return info;

  } catch (error) {
    console.log("MailServer Error : " + error);
  }
};
