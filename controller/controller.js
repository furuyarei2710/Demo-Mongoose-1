import Users from "../models/User";
export async function putUser(req, res) {
	const { method } = req;
	const { ClientId } = req.query;

  try {
    const formData = req.body;

    if (!formData) throw new Error("Invalid data");

		await Users.updateOne({ _id: ClientId, formData});
		res.status(200).json({success: true, data: formData})
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
