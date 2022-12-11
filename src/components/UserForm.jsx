import React, { useState, useEffect } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

function UserForm(props) {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <img
        src={require("../assets/images/logo.png")}
        height={200}
        width={200}
      />
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default UserForm;
