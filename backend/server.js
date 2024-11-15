const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
if (
  !process.env.SMTP_HOST ||
  !process.env.SMTP_PORT ||
  !process.env.EMAIL_USER ||
  !process.env.EMAIL_PASS
) {
  throw new Error("Missing required environment variables");
}
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // mail.zummitlabs.com
  port: process.env.SMTP_PORT, // 465 for SSL/TLS
  secure: true, // Use SSL/TLS directly (recommended)
  auth: {
    user: process.env.EMAIL_USER, // info.zummpath@zummitlabs.com
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
  debug: true, // Enable debugging for detailed logs
});
app.post("/send-email", (req, res) => {
  const { from_name, from_email, phone, message } = req.body;
  // 1st email: Send the contact form data to your email
  const mailOptionsToAdmin = {
    from: `"${from_name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: `Name: ${from_name}\nEmail: ${from_email}\nPhone: ${phone}\nMessage: ${message}`,
  };
  // 2nd email: Send an automatic reply to the user
  const mailOptionsToUser = {
    from: `"Your Team" <${process.env.EMAIL_USER}>`,
    to: from_email,
    subject: "Thank you for reaching out to Zummpath Bioinformatics!",
    text: `Hi ${from_name},\n\nThank you for contacting us. Someone from our team will get back to you shortly.\n\nIn the meantime, we wanted to let you know that we offer a 6-month Bioinformatics Industrial Training program at Zummpath. The course is priced at ₹59,999 and is designed to give you hands-on experience in bioinformatics.\n\nFeel free to reach out if you have any questions or need more information about the program.\n\nBest regards,\nThe Zummpath Team`,
  };
  // Send the email to admin first
  transporter.sendMail(mailOptionsToAdmin, (error, info) => {
    if (error) {
      console.error("Error sending admin email:", error);
      return res.status(500).json({ message: "Error sending admin email" });
    }
    console.log("Admin email sent:", info.response);
    // Send the automatic reply to the user
    transporter.sendMail(mailOptionsToUser, (error, info) => {
      if (error) {
        console.error("Error sending user reply email:", error);
        return res
          .status(500)
          .json({ message: "Error sending user reply email" });
      }
      console.log("User reply email sent:", info.response);
      res.status(200).json({ message: "Emails sent successfully" });
    });
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
