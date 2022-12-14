import React, { useState } from "react";
import { CancelCreateToDoBtnStyled, CreateToDoActionsStyled, CreateToDoBtnStyled } from "../../assets/css/components/ActionsStyled";
import { CreateTodoFormInputStyled, CreateTodoFormStyled } from "../../assets/css/components/Form";

export function ToDoForm({ handleCreateToDo, handleRemoveToDoInputForm }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <>
      <CreateTodoFormStyled className='createTodoForm'>
        <CreateTodoFormInputStyled
          className='todoInput'
          name="inputForm"
          value={input}
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <CreateToDoActionsStyled className='actionsContainer'>
          <CreateToDoBtnStyled
            type="submit"
            className='createToDoBtn'
            handleOnClick={handleCreateToDo}
            text = "Save"
          ></CreateToDoBtnStyled>
          <CancelCreateToDoBtnStyled
            className='cancelCreateToDoBtn'
            handleOnClick={handleRemoveToDoInputForm}
            text = {"Cancel"} />
        </CreateToDoActionsStyled>
      </CreateTodoFormStyled>
    </>
  );
}

export default ToDoForm;
