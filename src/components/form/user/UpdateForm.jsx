import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useReducer, useEffect } from "react";
import {
  GenderOptionStyled,
  OperatorUserForm,
  OperatorUserFormAction,
  OperatorUserFormInput,
  OperatorUserFormLabel,
} from "../../../assets/css/components/CreateUserForm";

export default function UpdateUserFormComponent({
  user,
  heading,
  action,
  userID,
  setUserID,
}) {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    gender: user.gender,
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [fact, setFact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  });
  const handleOnChangeFacts = (propertyName) => (event) => {
    setFormData((formData) => ({
      ...formData,
      [propertyName]: event.target.value,
    }));
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/users/" + userID)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        setFact({
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
          password: res.password,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    console.log(fact);

    fetch("http://localhost:3000/api/users/" + userID, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(fact),
    })
      .then(() => {
        console.log("data added");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDeleteClient = async (_id) => {
    const response = await fetch("http://localhost:3000/api/users/" + userID, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(fact),
    })
      .then(() => {
        response.json();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="">{heading}</h2>
      <OperatorUserForm
        // action={`/api/users/${userID}`}
        className="user-crud-form"
        onSubmit={handleUpdateSubmit}
      >
        <OperatorUserFormLabel className="user-crud-label" htmlFor="firstName">
          First name
        </OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={handleOnChangeFacts("firstName")}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter the first name"
          className="user-crud-input"
          value={formData.firstName}
        ></OperatorUserFormInput>
        <OperatorUserFormLabel className="user-crud-label" htmlFor="lastName">
          Last name
        </OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={handleOnChangeFacts("lastName")}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter the last name"
          className="user-crud-input"
          value={formData.lastName}
        ></OperatorUserFormInput>
        <OperatorUserFormLabel className="user-crud-label" htmlFor="email">
          Email:
        </OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={handleOnChangeFacts("email")}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className="user-crud-input"
          value={formData.email}
        ></OperatorUserFormInput>
        <OperatorUserFormLabel className="user-crud-label" htmlFor="password">
          Password
        </OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={handleOnChangeFacts("password")}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          className="user-crud-input"
          value={formData.password}
        ></OperatorUserFormInput>
        <GenderOptionStyled className="genderOptions">
          {/* <OperatorUserFormLabel htmlFor="gender">
            {" "}
            Gender
          </OperatorUserFormLabel>
          <input type="radio" name="gender" value="Male" /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          Female */}
          <OperatorUserFormAction
            className={`user-crud-action ${action.toLowerCase()}`}
            type="submit"
            value={`${action}`}
          ></OperatorUserFormAction>
        </GenderOptionStyled>
      </OperatorUserForm>
    </div>
  );
}
