import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const emailAddress = process.env.SENDGRID_EMAIL;

type Attachment = {
  content: string;
  filename: string;
  type: string;
  disposition: "attachment";
};

type EmailData = {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
  attachments?: Attachment[];
};

type DataResponse = {
  data?: any;
  success: boolean;
  error?: string;
};

export default async function _(req: NextApiRequest, res: NextApiResponse<DataResponse>) {
  if (req.method !== "POST") {
    res.status(400).json({ success: false, error: "Invalid request" });
    return;
  }

  const data = JSON.parse(req.body);

  const {
    name,
    email,
    phone,
    age,
    length,
    club,
    league,
    level,
    role,
    position,
    positionTwo,
    footed,
    school,
    grade,
  } = data;

  const message = `
    Name: ${name ? name : ""} \r\n
    Email: ${email ? email : ""} \r\n
    Phone: ${phone ? phone : ""} \r\n
    Age: ${age ? age : ""} \r\n
    Length: ${length ? length : ""} \r\n
    Club: ${club ? club : ""} \r\n
    League: ${league ? league : ""} \r\n
    Level: ${level ? level : ""} \r\n
    Role: ${role ? role : ""} \r\n
    Position: ${position ? position : ""} \r\n
    Position Two: ${positionTwo ? positionTwo : ""} \r\n
    Footed: ${footed ? footed : ""} \r\n
    School: ${school ? school : ""} \r\n
    Grade: ${grade ? grade : ""} \r\n
  `;

  let emailData: EmailData = {
    to: emailAddress as string,
    from: emailAddress as string,
    subject: "Form submission",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  try {
    await sgMail.send(emailData);
  } catch (error) {
    console.log(error);

    res.status(400).json({ success: false, error: "Error while sending email" });
    return;
  }

  res.status(200).json({ success: true, data: {} });
}
