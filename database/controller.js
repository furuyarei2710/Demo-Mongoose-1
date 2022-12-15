import User from "../models/User";
 
 
// get : http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await User.find();
 
    if (!users) return res.status(404).json({ error: "No users found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}
 
// get : http://localhost:3000/api/user/1
export async function getUser(req, res) {
  try {
    const {userID} = req.query;
 
    if(userID){
      const user = await User.findById(userID);
      res.status(200).json(user)
    }
    res.status(404).json({ error: "No user selected" })
 
  } catch (error) {
    res.status(404).json({ error: "Cannot get the user" })
  }
}
 
//  post : http://localhost:3000/api/user
export async function createUser(req, res) {
  try {
    const formData = req.body;
    if(!formData) return res.status(404).json({error: "No data found"})
    User.create(formData, function(err, data) {
      return res.status(200).json(data)
    })
 
  } catch (error) {
    return res.status(404).json({error})
  }
}
 
//  put : http://localhost:3000/api/user
export async function updateUser(req, res) {
  try {
    const {userID} = req.query;
    const formData = req.body;
 
   if (userID && formData){
    const user = await User.findByIdAndUpdate(userID, formData)
    res.status(200).json(user)
   }
   res.status(404).json({error: "User not selected"})
  } catch (error) {
    res.status(404).json({error:"Error while updating data"})
  }
}
 
// delete : http://localhost:3000/api/user
export async function deleteUser(req, res) {
  try{
    const {userID} = req.query;
 
    if(userID){
      const user = await User.findByIdAndDelete(userID)
      res.status(200).json({ deleted: "User deleted"})
    }
    res.status(404).json({error: "User not selected"})
 
  } catch (error) {
    res.status(404).json({error: "Error while deleting data"})
  }
}
