import React, { useState } from "react";

export default function EditForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
	
	const updateUser = async(userId) => {
		try {
			await fetch('/api/user/crud', {
				method: 'PUT', 
				body: userId
			})
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
	

  return (
    <div className="auth-form-container">
      <h2>Form Editing</h2>
      <form action="/api/user/crud" method="PUT" className="edit-form">
        <label htmlFor="firstname"> First name</label>
        <input
          value={firstname}
          onChange={(e) => setfirstName(e.target.value)}
          type=" firstname"
          name="firstName"
          id="firstname"
          placeholder="first Name"
        />
        <label htmlFor="lastname"> Last name</label>
        <input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          type=" lastname"
          name="lastName"
          id="lastname"
          placeholder="last Name"
        />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <label htmlFor="gender"> Gender</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Female
        <input type="submit" value={"Edit"} />
      </form>
    </div>
  );
}
