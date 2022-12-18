import Link from "next/link";
import React, { useState, useReducer, useEffect } from "react";
import { CRUDUserFormInput, GenderOptionStyled, OperatorUserForm, OperatorUserFormAction, OperatorUserFormInput, OperatorUserFormLabel, UpdateUserForm, UpdateUserFormInput } from "../../../assets/css/components/CreateUserForm";
import axios from 'axios';
import { property } from "lodash";
import { useRouter } from "next/router";

const formReducer = (state, event) => {
  return {
    ...state,
    name: event.target.value,
  };
};



export default function CreateFormComponent({ user, heading, action }) {
  const [gender, setGender] = useState("");
  const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", password: "", gender: ""});
  // const [id, setId] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleOnChangeFacts = (propertyName) => (event) => {
    setFormData((formData) => ({
      ...formData,
      [propertyName]: event.target.value,
    }));
  };

  const handleCreateUserSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    try {
      setIsLoading(true);
      const obj  = await axios.post("http://localhost:3000/api/users",formData);
      setUsers(users.concat(obj.data));
      setIsLoading(false);
      router.push('/usersInfo')
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3000/api/users').then(response => setUsers(response.data));
  }, [users])
  
  return (
    <div className="form-container">
      <h2 className="">{heading}</h2>
      <OperatorUserForm
        // action="/api/users"
        // method="POST"
        className="user-crud-form"
        onSubmit={handleCreateUserSubmit}
      >
        <OperatorUserFormLabel className="user-crud-label" htmlFor="firstName">First name</OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={handleOnChangeFacts("firstName")}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter the first name"
          className="user-crud-input"
        ></OperatorUserFormInput>
        <OperatorUserFormLabel className="user-crud-label" htmlFor="lastName">Last name</OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={handleOnChangeFacts("lastName")}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter the last name"
          className="user-crud-input"
        ></OperatorUserFormInput>
        <OperatorUserFormLabel className="user-crud-label" htmlFor="email">Email:</OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={handleOnChangeFacts("email")}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className="user-crud-input"
        ></OperatorUserFormInput>
        <OperatorUserFormLabel className="user-crud-label" htmlFor="password">Password</OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={handleOnChangeFacts("password")}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          className="user-crud-input"
        ></OperatorUserFormInput>
        <GenderOptionStyled className="genderOptions">
          <OperatorUserFormLabel htmlFor="gender"> Gender</OperatorUserFormLabel>
          <input type="radio" name="gender" value="Male" /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <OperatorUserFormAction className={`user-crud-action ${action.toLowerCase()}`} type="submit" value={`${action}`}></OperatorUserFormAction>
        </GenderOptionStyled>
      </OperatorUserForm>
    </div>
  );
}

