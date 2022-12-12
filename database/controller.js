import User from "../models/User";

export async function getUsers(req, res) {
  try {
    const users = await User.find();

    if (!users) return res.status(404).json({ error: "No users found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}
