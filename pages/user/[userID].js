import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const User = ( { users }) => {
  const router = useRouter();
  const { userID } = router.query;
  const specificUser = users.find(user => user._id === userID );
  const [email, setEmail] = useState(specificUser.email);
  const [password, setPassword] = useState(specificUser.password);
  const [firstName, setFirstName] = useState(specificUser.firstName);
  const [lastName, setLastname] = useState(specificUser.lastName);
  const [gender, setGender] = useState(specificUser.gender);
  const mongoose = require('mongoose');
  const axios = require("axios");
  const db = mongoose.connection;

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form action="/api/user/crud">
        <label htmlFor="firstname"> First name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          name="firstName"
          id="firstname"
          placeholder="first Name"
        />
        <label htmlFor="lastname"> Last name</label>
        <input
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
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
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          name="password"
        />
        <label htmlFor="gender"> Gender</label>
        <input
          type="radio"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Female
        <input type="submit" value={"Edit"} />
      </form>
    </>
  );
};

export async function getServerSideProps(){
  try {
    let response = await fetch("http://localhost:3000/api/user/crud");
    let users = await response.json();
    return {
      props: {
        users: JSON.parse(JSON.stringify(users)),
      },
    };
  } catch (error) {
    throw new Error(error);
  }
}

export default User;

// connect to the database

mongoose.connect(`mongodb+srv://${user}:${password}@${URL}`, {useNewUrlParser: true }, function (err) {
 
   if (err) throw err;

   console.log('Successfully connected');
 
});

// update user

