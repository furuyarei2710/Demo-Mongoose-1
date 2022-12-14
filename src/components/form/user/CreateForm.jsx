import Link from "next/link";
import React, { useState, useReducer } from "react";
import { CRUDUserFormInput, GenderOptionStyled, OperatorUserForm, OperatorUserFormAction, OperatorUserFormInput, OperatorUserFormLabel, UpdateUserForm, UpdateUserFormInput } from "../../../assets/css/components/CreateUserForm";

const formReducer = (state, event) => {
  return {
    ...state,
    name: event.target.value,
  };
};
export default function CreateFormComponent({ heading, action }) {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0)
      return console.log("Don't have form data");
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2 className="">{heading}</h2>
      <OperatorUserForm
        action="/api/user"
        method="POST"
        className="user-crud-form"
        onSubmit={handleSubmit}
      >
        <OperatorUserFormLabel className="user-crud-label" htmlFor="firstName">First name</OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={setFormData}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter the first name"
          className="user-crud-input"
        ></OperatorUserFormInput>
        <OperatorUserFormLabel className="user-crud-label" htmlFor="lastName">Last name</OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={setFormData}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter the last name"
          className="user-crud-input"
        ></OperatorUserFormInput>
        <OperatorUserFormLabel className="user-crud-label" htmlFor="email">Email:</OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={setFormData}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className="user-crud-input"
        ></OperatorUserFormInput>
        <OperatorUserFormLabel className="user-crud-label" htmlFor="password">Password</OperatorUserFormLabel>
        <OperatorUserFormInput
          onChange={setFormData}
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
