// import Users from "../models/User";
// import clientPromise from '../../../config/dbConnect';

// export async function putUser(req, res) {
//   const { method } = req;
//   const { ClientId } = req.query;

//   try {
//     const client = await clientPromise;
//     const db = client.db("users");
//     const { firstName, lastName, email, password, gender } = req.body;
//     const id = req.params;
//     const user = await db
//       .collection("users")
//       .updateOne(
//         { _id: id },
//         { $set: { firstName, lastName, email, password, gender } }
//       );
//     res.json(user);
//   } catch (error) {
//     res.status(400).json({ success: false });
//   }
// }
