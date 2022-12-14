import clientPromise from "../../../database/dbConnect";

export default async function createWorkspace(req, res) {
  const {
    query: { id },
  } = req
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

        const workspace = await db.collection("workspaces").insert({
          name, color, url
        });

        if(workspace){
          res.redirect(307, '/')
        }

      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
