// import axios from 'axios';
// import { update } from "lodash";
// import { getUsers } from ".";
// import User from "../../../models/User";

// export default function handler(req, res) {
//   const data = getUserFact();
//   const {userID} = req.query;
//   res.status(200).json({ name: req.query.userID, data });
// }

// // export default async function handler(req, res) {
// //   const { method } = req;

// //   // await verifyUserSession({
// //   //   req,
// //   //   res,
// //   //   getToken,
// //   //   Session,
// //   // });

// //   switch (method) {
// //     case "GET":
// //       await getUserFact(req, res);
// //       break;

// //     case "PATCH":
// //       await updateUserFact(req, res);
// //       break;

// //     // case "DELETE":
// //     //   await deletePhonebook(req, res);
// //     //   break;

// //     default:
// //       break;
// //   }
// // }

import { getUsers } from ".";
import clientPromise from "../../../database/dbConnect";
import User from "../../../models/User";
// import { connectMongo } from "../../../database/dbConnect";

// connectMongo();

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("users");
  const { method } = req;
  const { userID } = req.query;
  const { firstName, lastName, email, password, gender } = req.body;
  
  if(req.method === 'PUT'){
    const client = await clientPromise;
    const db = client.db("users");
    const data = {...req.body};
    const newData = await db.collection("users").findOneAndUpdate({ _id: userID }, {...req.body});
    // const users = JSON.parse(JSON.stringify(await db.collection("users").find({}).toArray()));
    // const singleUser = users.find(user => user._id === userID);
    // res.json(singleUser)

  }
}