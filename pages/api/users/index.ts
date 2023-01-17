import { NextApiRequest, NextApiResponse } from "next"; // Import the Next.js Api Request, Response
import prisma from "../../../lib/prisma"; // Import the prisma client
import { hash } from "bcryptjs"; // Import the hash function from bcryptjs library
import { UserClass } from "../../../axios/services/users.service"; // Import UserClass interface from user.service

export default async function handler( // export a function called handler
  req: NextApiRequest, // req argument of type NextApiRequest
  res: NextApiResponse // res argument of type NextApiResponse
) {
  if (req.method === "POST") {
    // check if request method is post
    return await addUser(req, res); // call add user function
  } else if (req.method === "GET") {
    // check if request method is get
    const { email } = req.query; // get the email from query params
    if (req.query && email) {
      // check if query params is present and email is set
      return await getSingleUser(req, res); // call getSingleUser function
    }
    return await getUsers(req, res); // call getUsers function
  } else {
    return res.status(405).json({ msg: "Method not allowed" }); // return error response
  }
}

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  // getUsers function
  try {
    const user = await prisma.user.findMany({}); // get all the users from database
    if (user) {
      return res
        .status(200)
        .json({ user, success: "Successfully get the data" }); // return success response
    }
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" }); // return error response
  }
};
const getSingleUser = async (req: NextApiRequest, res: NextApiResponse) => {
  // getSingleUser function
  try {
    const { email } = req.query; // get the email from query params
    const user = await prisma.user.findUnique({ where: { email: email } }); // get the user from database with passed email
    if (user) {
      return res
        .status(200)
        .json({ user, success: "Successfully get the single user data" }); // return success response
    }
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" }); // return error response
  }
};

const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  // addUser function
  try {
    const { name, email, password } = req.body; // get the body params
    const createUser = await prisma.user.create({
      data: <UserClass>{
        // create the user in database
        name,
        email,
        password: await hash(password, 12), // encrypt the password with bcryptjs
      },
    });
    return res
      .status(200)
      .json({ user: createUser, msg: "Account has been created!" }); // return success response
  } catch (err) {
    return res.status(500).json({ msg: "User Already Exists" }); // return error response
  }
};
