// import Workspace from "../../../models/Workspace";
// import connectMongo from "../../../database/dbConnect";
// import mongoose from "../../../utils/mongoose";
// import { getUser, createUser, updateUser, deleteUser } from "../../../database/controller";
 
 
 
// export default async function handler (req, res) {
//   connectMongo();
 
//   // type of request
//   const { method } = req;
 
//   switch (method) {
//     case "GET":
//       getWorkspace(req, res);
//       break;
//     case "POST":
//       createWorkspace(req, res);
//       break;
//     case "PUT":
//       updateWorkspace(req, res);
//       break;
//     case "DELETE":
//       deleteWorkspace(req, res);
//       break;
//     default:
//       res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// }

import clientPromise from "../../../database/dbConnect";

export default async function createWorkspace(req, res) {
  const {
    query: { id },
  } = req;
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const client = await clientPromise;
        const db = client.db("workspaces");

        const workspaces = await db.collection("workspaces").find({}).toArray();

        res.json(workspaces);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const client = await clientPromise;
        const db = client.db("workspaces");
        const { name, color, url } = req.body;

        const workspaces = await db.collection("workspaces").insertOne({
          name,
          color,
          url
        });
        res.json(workspaces);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
