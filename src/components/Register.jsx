import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setfirstName] = useState('');
    const [lastname,setLastname] = useState ('');
    const [gender,setGender] = useState ('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Sign up</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="firstname"> First name</label>
            <input value={firstname} onChange={(e) => setfirstName(e.target.value)} type =" firstname" name="firstname" id="firstname" placeholder="first Name" />
            <label htmlFor="lastname"> Last name</label>
            <input value={lastname} onChange={(e) => setLastname(e.target.value)}type =" lastname" name="lastname" id="lastname" placeholder="last Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="gender"> Gender</label>
            <input type ="radio" name ="gender" value = "Male" onChange = {e=>setGender(e.target.value)} /> Male
            <input type ="radio" name ="gender" value = "Female" onChange = {e=>setGender(e.target.value)} /> Female
    
            <button type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}