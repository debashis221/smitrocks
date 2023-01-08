import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { hash } from "bcryptjs";
import { UserClass } from "../../../axios/services/users.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await addUser(req, res);
  } else if (req.method === "GET") {
    const { email } = req.query;
    if (req.query && email) {
      return await getSingleUser(req, res);
    }
    return await getUsers(req, res);
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await prisma.user.findMany({});
    return res.status(200).json({ data, success: "Successfully get the data" });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};
const getSingleUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req.query;
    const data = await prisma.user.findUnique({ where: { email } });
    if (data) {
      return res
        .status(200)
        .json({ data, success: "Successfully get the single user data" });
    }
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, password } = req.body;
    const createUser = await prisma.user.create({
      data: <UserClass>{
        name,
        email,
        password: await hash(password, 12),
      },
    });
    return res
      .status(200)
      .json({ data: createUser, msg: "Account has been created!" });
  } catch (err) {
    return res.status(500).json({ msg: "User Already Exists" });
  }
};
