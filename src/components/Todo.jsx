import React from "react";
import { TodoDescriptionStyled, TodoStyled, TodoTitleStyled } from "../assets/css/components/Todos";

import { AssignerAvatarStyled } from "../assets/css/components/ModalToDoStyled";
import userAvatar from '../assets/images/user.png'

function Todo({
  provided,
  index,
  id,
  title,
  description,
  handleShowToDoContent,
}) {
  return (
    <>
      <TodoStyled
        key={id}
        className="todo"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        itemID={id}
        index={index}
        onClick={handleShowToDoContent}
      >
        <TodoTitleStyled className="todoTitle">{title}</TodoTitleStyled>
        <TodoDescriptionStyled className="todoDescription">{!description ? 'Describe your task' : description}</TodoDescriptionStyled>
        <div className="userAccount">
          <AssignerAvatarStyled src={userAvatar} className={"userAvatar"} width={30} height={30} alt={title}></AssignerAvatarStyled>
        </div>
      </TodoStyled>
    </>
  );
}

export default Todo;

// User click to medical history --> return the patient's health state

// patient's health state : (if it's been a long time) ==> notify the user to take the new prescription
                         // (if it's been a recent time) ==> X