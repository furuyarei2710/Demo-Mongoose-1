import { useRouter } from "next/router";
import { useEffect } from "react";
import clientPromise from "../../../config/dbConnect";

export default async function updateUser(req, res) {
  // const { userID } = router.query;
  const client = await clientPromise;
  const db = client.db("users");
  const { firstName, lastName, email, password, gender } = req.body;
  console.log(firstName, lastName, email, password, gender);
}

