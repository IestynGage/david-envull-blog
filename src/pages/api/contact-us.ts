// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  totallyDoStuff(req);

  return res.status(200).json({ message: "Hello from Next.js!" });
}

const totallyDoStuff = (req: NextApiRequest) => {};
