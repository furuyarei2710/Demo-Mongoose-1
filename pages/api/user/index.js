import clientPromise from "../../../database/dbConnect";

export default async function createUser(req, res) {
  const {
    query: { id },
  } = req
  const { method } = req;
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

        const user = await db.collection("users").insert({
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
    case "PUT" /* Edit a model by its ID */:
      try {
        // const client = await clientPromise;
        // const db = client.db("users");
        // const newUser = req.body;
        // const updatedUser = await db.collection("users").replaceOne({_id: id, newUser})
        // res.json(updatedUser)
        // console.log(req.method)
        
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
