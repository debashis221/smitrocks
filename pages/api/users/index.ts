import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { hash } from "bcryptjs";

interface User {
  name: string;
  email: string;
  password: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      return await addUser(req, res);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: err });
    }
  } else if (req.method === "GET") {
    try {
      return await getUsers(req, res);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await prisma.user.findMany({});
    return res.status(200).json({ data, success: "Successfully get the data" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, password } = req.body;
    const user = await prisma.user.create({
      data: <User>{
        name,
        email,
        password: await hash(password, 12),
      },
    });
    return res.status(200).json({ user, msg: "Account has been created?" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
};
