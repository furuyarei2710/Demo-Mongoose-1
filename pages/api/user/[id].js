import clientPromise from "../../../config/dbConnect";

export const editUser = async(id, user) => {
	const client = await clientPromise;
	const db = client.db("users");
	
	const userUpdated = await db.collection("users").replaceOne({_id: id}, user);
	res.json(userUpdated);
}