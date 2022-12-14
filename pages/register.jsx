import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className="auth-form-container">
      <h2>Sign up</h2>
      <form action="/api/user" method="POST" className="register-form">
        <label htmlFor="firstName"> First name</label>
        <input
          value={firstname}
          onChange={(e) => setfirstName(e.target.value)}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter the first name"
        />
        <label htmlFor="lastName"> Last name</label>
        <input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter the last name"
        />
        <label htmlFor="email">Email:</label>
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
        <input type="submit" value={"Sign Up"} />
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
}
