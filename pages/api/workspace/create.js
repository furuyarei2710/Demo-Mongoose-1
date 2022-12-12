import clientPromise from "../../../config/dbConnect";
import { putUser } from "../../../controller/controller";
import User from "../../../models/User";
import mongoose from "../../../utils/mongoose";
import { Router, useRouter } from 'next/router';
import { use, useEffect } from "react";


export default async function createWorkspace(req, res) {
	const {
		query: { id },
  } = req
  const { name, color, url } = req.body;
  const obj = {
		name, color, url
  };
  console.log(obj);
  const { method } = req;
  // await dbConnect();
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
        const {name, color, url} = req.body;

        const workspaces = db.collection("workspaces").insertOne({
          name, color, url
        });
				return workspaces;
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // case "PUT" /* Edit a model by its ID */:
    //   try {
    //     const client = await clientPromise;
    //     const db = client.db("users");
    //     const newUser = req.body;
    //     const updatedUser = await db.collection("users").replaceOne({_id: id, newUser})
    //     res.json(updatedUser)
        
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
