// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import connectMongo from "../../../config/dbConnect";

import clientPromise from '../../../config/dbConnect';
import { putUser } from '../../../controller/controller';
import User from '../../../models/User';
import mongoose from '../../../utils/mongoose'

export default async function createUser(req, res) {
	// event.preventDefault();
	console.log(req.body)
  const { email, firstName, lastName, gender } = req.body;
	const obj = {
		email, firstName, lastName, gender
	}
	console.log(obj)
  const { method } = req;
  // await dbConnect();
  switch (method) {
  	case "GET":
      try {
        const client = await clientPromise;
				const db = client.db("users");
		
				const users = await db.collection("users").find({}).toArray();
				res.json(users);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
				const client = await clientPromise;
        const db = client.db("users");
        const { firstName, lastName, email, password, gender } = req.body;

        const user = await db.collection("users").insert ({
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
      break;
		case "PUT":
      putUser(req, res);
    default:
      res.status(400).json({ success: false });
      break;
  }
}

const updateUser = async(userId) => {
  try {
    await fetch('/api/')
  } catch (error) {
    
  }
  // try{
  //   const client = await clientPromise;
  //   const db = client.db("users");
  //   const { firstName, lastName, email, password, gender } = req.body;

  //   const user = await db.collection("users").updateOne({
  //     _id: new ObjectId(req.body)
  //   }, {
  //     $set: {
  //       published: true 
  //     } 
  //   }) 

  //   return res.json({
  //     message: "Post Updated Successfully",
  //     success: true
  //   })
  // }catch(error){
  //   res.status(400).json({ success: false });
  // }
}
