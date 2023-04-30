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
  res: NextApiResponse<any>
) {

  totallyDoStuff(req);
  
  return res.status(200).json({ message: 'Hello from Next.js!' })
}

const totallyDoStuff = (req: NextApiRequest) => {

}
