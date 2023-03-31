// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
type Data = {
  name: string
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {

  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  if (req.method && req.method === 'POST') {
    transporter.sendMail(mailOptions, function(error, info){
      return error ? res.status(500) : res.status(200);
    }); 
  }
  const message = process.env.TRANSPORTER_EMAIL ?? "asdasd";
  return res.status(400);
}
