// import User from "../../../models/User";
// import connectMongo from "../../../database/dbConnect";
// import { getUsers, createUser, updateUser, deleteUser } from "../../../database/controller";

// export default async function handler (req, res) {
//   connectMongo();

//   // type of request
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       getUsers(req, res);
//       break;
//     case "POST":
//       createUser(req, res);
//       break;
//     case "PUT":
//       updateUser(req, res);
//       break;
//     case "DELETE":
//       deleteUser(req, res);
//       break;
//     default:
//       res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// }

import { updateUser } from "../../../database/controller";
import clientPromise from "../../../database/dbConnect";

export const getUsers = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("users");

    const users = await db.collection("users").find({}).toArray();

    res.json(users);
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const createUser = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("users");
    const { firstName, lastName, email, password, gender } = req.body;

    const user = await db.collection("users").insertOne({
      firstName,
      lastName,
      email,
      password,
      gender,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
export default async function handler(req, res) {
  const {
    query: { id },
  } = req;
  const { method } = req;
  switch (method) {
    case "GET":
      await getUsers(req, res);
      break;
    case "POST":
      await createUser(req, res);
      break;
  }
}
