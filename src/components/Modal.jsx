import React, { useState, useContext } from "react";
import CalendarComponent from "../components/Calendar";
import { DateContext } from "../components/context/DateContext";
import { UnderlineStyled } from "../assets/css/components/UnderlineStyled";
import userAvatar from '../assets/images/user.png'

import {
  AboutAssignee,
  AboutAssigner,
  AboutDueDateStyled,
  AboutDueDateTextStyled,
  AboutDueTimeTextStyled,
  AboutStatus,
  AcceptToDoDescriptionActionStyled,
  AcceptToDoRemovingActionStyled,
  AcceptToDoTitleActionStyled,
  AssignerAvatarStyled,
  CalendarBtnStyled,
  CalendarTemplate,
  DeleteBtnStyled,
  DeleteBtnTrashIcon,
  DeleteTextStyled,
  DescriptionHeadingStyled,
  EditBtnIconStyled,
  EditBtnStyled,
  ModalCenterStyled,
  ModalCloseBtnStyled,
  ModalCloseIconStyled,
  ModalContentStyled,
  ModalDarkBackgroundStyled,
  ModalDescriptionEditingActions,
  ModalDescriptionStyled,
  ModalFormStyled,
  ModalListOfTodoDetailsStyled,
  ModalStatusTextStyled,
  ModalTitleEditingActions,
  ModalTitleStyled,
  ModalTodoDetails,
  RejectToDoDescriptionActionStyled,
  RejectToDoRemovingActionStyled,
  RejectToDoTitleActionStyled,
  RemoveActionsStyled,
  RemoveModalHeadingStyled,
  RemoveModalStyled,
  ToDoDescriptionInputStyled,
  ToDoTitleInputStyled,
} from "../assets/css/components/ModalToDoStyled";
import Image from 'next/image'


export const ItemContent = ({
  id,
  title,
  description,
  columnKey,
  handleRemoveToDoContent,
  handleEditToDo,
  isOpenEditingForm,
  handleShowEditToDoForm,
  handleRemoveEditToDoForm,
  handleEditDescription,
  handleRemoveToDo,
  isOpenRemoveModal,
  handleShowRemoveModal,
  handleHideRemoveModal,
  isOpenCalender,
  handleShowCalendar,
  handleSaveDueDate,
}) => {
  const [editInput, setEditInput] = useState(title);
  const [inputDescription, setInputDescription] = useState(description);
  const dateObj = useContext(DateContext);

  const handleSetEditing = (e) => {
    setEditInput(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setInputDescription(e.target.value);
  };

  return (
    <ModalDarkBackgroundStyled className="darkBackground">
      <ModalCenterStyled className="center">
        <ModalFormStyled className="modal">
          <ModalCloseBtnStyled className="closeBtn">
            <ModalCloseIconStyled
              className="closeIcon"
              onClick={handleRemoveToDoContent}
            />
          </ModalCloseBtnStyled>
          <ModalContentStyled className="modalContent">
            <ModalTitleStyled className="modalTitle">{title}</ModalTitleStyled>
            {isOpenEditingForm && (
              <>
                <ToDoTitleInputStyled
                  type="text"
                  value={editInput}
                  className="todoTitleEditingInput"
                  onChange={handleSetEditing}
                ></ToDoTitleInputStyled>
                <ModalTitleEditingActions className="todoTitleActions">
                    <AcceptToDoTitleActionStyled
                      type={"submit"}
                      className={"saveEditingTitle"}
                      handleOnClick={handleEditToDo}
                      text={"Save"}
                    ></AcceptToDoTitleActionStyled>
                    <RejectToDoTitleActionStyled
                      text={"Cancel"}
                      className={"cancelEditingTitle"}
                      handleOnClick={handleRemoveEditToDoForm}
                    ></RejectToDoTitleActionStyled>
                </ModalTitleEditingActions>
              </>
            )}
            <EditBtnStyled
              type={""}
              className={"btn editBtn"}
              handleOnClick={handleShowEditToDoForm}
            >
              <EditBtnIconStyled className="editIcon"></EditBtnIconStyled>
            </EditBtnStyled>
            <CalendarBtnStyled
              className={"calendarBtn"}
              handleOnClick={handleShowCalendar}
            >
              <CalendarTemplate className="calendarIcon"></CalendarTemplate>
            </CalendarBtnStyled>
            {/* <CalendarComponent /> */}
            {isOpenCalender && (
              <CalendarComponent
                handleShowCalendar={handleShowCalendar}
                handleSaveDueDate={handleSaveDueDate}
              />
            )}
            {/* List Of Todo details /> */}
            <ModalListOfTodoDetailsStyled className="modalListOfTodoDetails">
              <ModalTodoDetails className="todoDetails">
                <AboutStatus className="modalStatus">
                  Status:{" "}
                  <ModalStatusTextStyled className="modalStatusText">
                    {columnKey}
                  </ModalStatusTextStyled>
                </AboutStatus>
              </ModalTodoDetails>
              <ModalTodoDetails className="todoDetails">
                <AboutAssignee className="modalAssignee">
                  Assignee:{" "}
                  <AboutAssigner className="modalAssigner">
                    <AssignerAvatarStyled
                      src={userAvatar}
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    ></AssignerAvatarStyled>
                  </AboutAssigner>
                </AboutAssignee>
              </ModalTodoDetails>

              <ModalTodoDetails className="todoDetails">
                {/* <AboutDueDateStyled className="modalDueDate">
                  Due date:{" "}
                  <AboutDueDateTextStyled className="dueDateText">{`${dateObj.date.getDate()}/${
                    dateObj.date.getMonth() + 1
                  }/${dateObj.date.getFullYear()}`}</AboutDueDateTextStyled>
                  <AboutDueTimeTextStyled
                    className="dueTimeText"
                    style={{
                      backgroundColor: `${dateObj.backgroundState.backgroundColor}`,
                      color: `${dateObj.backgroundState.color}`,
                    }}
                  >
                    {dateObj.time}
                  </AboutDueTimeTextStyled>
                </AboutDueDateStyled> */}
              </ModalTodoDetails>
            </ModalListOfTodoDetailsStyled>

            <UnderlineStyled className="underline"></UnderlineStyled>
            {/** hidden */}
            <DescriptionHeadingStyled className="descriptionHeading">
              To do
            </DescriptionHeadingStyled>
            <ModalDescriptionStyled className="modalDescription">
              {!description ? "Describe your task" : description}
            </ModalDescriptionStyled>
            {/** show */}
            {isOpenEditingForm && (
              <>
                <ToDoDescriptionInputStyled
                  placeholder="What details are we trying to do with this task ?"
                  className="todoDescriptionEditingInput"
                  onChange={handleChangeDescription}
                  value={inputDescription}
                ></ToDoDescriptionInputStyled>
                <ModalDescriptionEditingActions className="todoDescriptionActions">
                    <AcceptToDoDescriptionActionStyled
                      type={"submit"}
                      text={"Save"}
                      className={"saveEditingDescription"}
                      handleOnClick={handleEditDescription}
                    ></AcceptToDoDescriptionActionStyled>
                    <RejectToDoDescriptionActionStyled
                      type={""}
                      text={"Cancel"}
                      className={"cancelEditingDescription"}
                      handleOnClick={handleRemoveEditToDoForm}
                    ></RejectToDoDescriptionActionStyled>
                  </ModalDescriptionEditingActions>
              </>
            )}
            {/** Delete Button */}
            <DeleteBtnStyled className="deleteBtn" onClick={handleShowRemoveModal}>
              <DeleteBtnTrashIcon className="deleteTrashIcon"></DeleteBtnTrashIcon>
              <DeleteTextStyled className="deleteText">Delete</DeleteTextStyled>
            </DeleteBtnStyled>
            {isOpenRemoveModal && (
              <RemoveModalStyled className="removeModal">
                <RemoveModalHeadingStyled className="removeModalHeading">
                  Are you sure to delete your current task ?
                </RemoveModalHeadingStyled>
                <RemoveActionsStyled className="removeActions">
                    <AcceptToDoRemovingActionStyled
                      type={"submit"}
                      text={"Save"}
                      className="saveRemovingTodo"
                      handleOnClick={handleRemoveToDo}
                    ></AcceptToDoRemovingActionStyled>
                    <RejectToDoRemovingActionStyled
                      type={"submit"}
                      text={"Cancel"}
                      className="cancelRemovingTodo"
                      handleOnClick={handleHideRemoveModal}
                    >
                    </RejectToDoRemovingActionStyled>
                </RemoveActionsStyled>
              </RemoveModalStyled>
            )}
          </ModalContentStyled>
        </ModalFormStyled>
      </ModalCenterStyled>
    </ModalDarkBackgroundStyled>
  );
};
