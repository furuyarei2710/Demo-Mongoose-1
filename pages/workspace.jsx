import { useContext } from "react";
import React, { useState } from "react";
import _ from "lodash";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 } from "uuid";
import { ToDoForm } from "../src/components/Forms";
import ColumnAPI from "../src/components/ColumnAPI";
import TodoList from "../src/components/TodoList";
import { ItemContent } from "../src/components/Modal";
import { utilsPackage } from "../src/utils/utils";
import { DateContext } from "../src/components/context/DateContext";
import { BoardStyled } from "../src/assets/css/components/BoardStyled";
import {
  ColumnStateIcon,
  ColumnStyled,
  ColumnTitle,
  StatusIcon,
} from "../src/assets/css/components/Column";
import { AlertStyled } from "../src/assets/css/components/AlertStyled";
import { TodoContainerStyled } from "../src/assets/css/components/Todos";
import { AddBtnStyled } from "../src/assets/css/components/ActionsStyled";
import { resetServerContext } from "react-beautiful-dnd";
import { renderToString } from 'react-dom/server';

function Board({ ColumnAPI }) {
  const [columns, setColumns] = useState(ColumnAPI);
  const [specificItem, setSpecificItem] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenEditingForm, setIsOpenEditingForm] = useState(false);
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);
  const [isOpenCalender, setIsOpenCalendar] = useState(false);

  const dateObj = useContext(DateContext);

  /* -------------------------------------------------------------------------- */
  /*                             DRAG AND DROP ITEMS                            */
  /* -------------------------------------------------------------------------- */

  /**
   * Handle ending the dragging
   * @param {object} source The item that we will drag
   * @param {object} destination The item's destination that we wish to drop
   */
  const handleDragEnd = ({ destination, source }) => {
		console.log(destination)
    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    let itemCopy = {
      ...columns[source.droppableId].items[source.index],
    };
    setColumns((prev) => {
      prev = { ...prev };
      prev[source.droppableId].items.splice(source.index, 1);
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );
      return prev;
    });
  };

  const isInThePast = (date) => {
    const today = new Date();
    return (
      date.getHours() <= today.getHours() &&
      date.getMinutes() < today.getMinutes()
    );
  };

  /* -------------------------------------------------------------------------- */
  /*                          SHOW / HIDE FORMS OF TODO                         */
  /* -------------------------------------------------------------------------- */

  /**
   * Handle displaying the input form of Todo-list
   * @param {object} e (event)
   */
  const handleShowToDoInputForm = (e) => {
    e.preventDefault();
    const inputForm = e.currentTarget.previousSibling;
    const inputField = inputForm.querySelector(".todoInput");
    const addBtn = e.currentTarget;
    inputField.value = "";
    inputForm.classList.add("show");
    addBtn.classList.add("hidden");
  };

  /**
   * Handle discarded the input form of Todo-list
   * @param {object} e (event)
   */
  const handleRemoveToDoInputForm = (e) => {
    e.preventDefault();
    const inputForm = e.target.parentElement.parentElement;
    const inputField = inputForm.querySelector(".todoInput");
    const addBtn =
      e.target.parentElement.parentElement.parentElement.querySelector(
        ".addBtn"
      );
    inputField.value = "";
    inputForm.classList.remove("show");
    addBtn.classList.remove("hidden");
  };

  /**
   * Handle displaying the "To-do" content
   * @param {object} e (event)
   */
  const handleShowToDoContent = (e) => {
    const item = e.currentTarget;
    const itemTitle = e.currentTarget.querySelector(".todoTitle");
    const itemDescription = e.currentTarget.querySelector(".todoDescription");

    const columnKey =
      e.currentTarget.parentElement.parentElement.getAttribute("column_key");
    const itemIndex = item.getAttribute("index");

    setIsOpenModal(true);
    setSpecificItem({
      title: itemTitle.innerText,
      description: itemDescription.innerText,
      index: itemIndex,
      columnKey: columnKey,
    });
  };

  /**
   * Handle discarded the "To-do" content
   * @param {object} e (event)
   */
  const handleRemoveToDoContent = (e) => {
    setSpecificItem({});
    setIsOpenModal(false);
    setIsOpenEditingForm(false);
    setIsOpenCalendar(false);
  };

  /**
   * Handle displaying the input's editing form of Todo-list
   * @param {object} e (event)
   */
  const handleShowEditToDoForm = (e) => {
    const editBtn = e.currentTarget;
    const modalContent = e.currentTarget.parentElement;
    const itemTitle = modalContent.querySelector(".modalTitle");

    editBtn.classList.add("hidden");
    itemTitle.classList.add("hidden");

    setIsOpenEditingForm(true);
    setIsOpenCalendar(false);
  };

  /**
   * Handle discards the input's editing form of Todo-list
   * @param {object} e (event)
   */
  const handleRemoveEditToDoForm = (e) => {
    e.preventDefault();
    const modalContent =
      e.currentTarget.parentElement.parentElement.parentElement;
    const itemTitle = modalContent.querySelector(".modalTitle");
    const editBtn = modalContent.querySelector(".editBtn");

    editBtn.classList.remove("hidden");
    itemTitle.classList.remove("hidden");

    setIsOpenEditingForm(false);
  };

  /**
   * Handle displaying the "Delete" form of To-do
   * @param {object} e (event)
   */
  const handleShowRemoveModal = (e) => {
    const deleteBtn = e.currentTarget;
    const modalToDoTitle = deleteBtn.parentElement.querySelector(".modalTitle");
    const editBtn = deleteBtn.parentElement.querySelector(".editBtn");
    deleteBtn.classList.add("hidden");
    editBtn.classList.remove("hidden");
    modalToDoTitle.classList.remove("hidden");
    setIsOpenRemoveModal(true);
    setIsOpenEditingForm(false);
    setIsOpenCalendar(false);
  };

  /**
   * Handle discards the "Delete" form of To-do
   * @param {object} e (event)
   */
  const handleHideRemoveModal = (e) => {
    const modalContent =
      e.currentTarget.parentElement.parentElement.parentElement.parentElement;
    const deleteBtn = modalContent.querySelector(".deleteBtn");
    deleteBtn.classList.remove("hidden");
    setIsOpenRemoveModal(false);
  };

  const handleShowCalendar = (e) => {
    const modalContent = e.currentTarget.parentElement;
    const modalTitle = modalContent.querySelector(".modalTitle");
    const editBtn = modalContent.querySelector(".editBtn");
    const deleteBtn = modalContent.querySelector(".deleteBtn");
    modalTitle.classList.remove("hidden");
    editBtn.classList.remove("hidden");
    deleteBtn.classList.remove("hidden");
    setIsOpenCalendar(!isOpenCalender);
    setIsOpenEditingForm(false);
    setIsOpenRemoveModal(false);
  };

  // const handleHideCalendar = e => {
  //   setIsOpenCalendar(false)
  // }

  /* -------------------------------------------------------------------------- */
  /*                   CRUD (CREATE/READ/UPDATE/DELETE) ITEMS                   */
  /* -------------------------------------------------------------------------- */

  /**
   * Handle create the input form of Todo-list and render the item on the its column
   * @param {object} e (event)
   */
  const handleCreateToDo = (e) => {
    e.preventDefault();
    const column =
      e.currentTarget.parentElement.parentElement.parentElement.parentElement;
    const alertNofication = column.querySelector(".alert");
    const columnKey = column.getAttribute("column_key");
    const inputForm = e.target.parentElement.parentElement;
    const inputField = inputForm.querySelector(".todoInput");
    const newItem = {
      id: v4(),
      columnKey: columns[columnKey].title,
      title: inputField.value,
      description: "",
      columnID: columnKey,
      users: [],
    };

    const addBtn = e.target.parentElement.parentElement.nextSibling;

    if (!inputField.value) {
      utilsPackage.style.alert.show(
        alertNofication,
        "To-do cannot be empty !!!!",
        "#ff3e4e"
      );
      return;
    }
    setColumns((prev) => {
      prev = { ...prev };
      prev[columnKey].items.push(newItem);
      return prev;
    });
    inputForm.classList.remove("show");
    addBtn.classList.add("show");

    utilsPackage.style.alert.show(
      alertNofication,
      "Successfully added item !!!!",
      "#4bb679"
    );

    handleRemoveToDoInputForm(e);
  };

  /**
   * Handle updating the description of To-do
   * @param {object} e (event)
   */
  const handleEditDescription = (e) => {
    e.preventDefault();
    const columnKey = specificItem.columnKey;
    const itemIndex = specificItem.index;
    const modalContent =
      e.currentTarget.parentElement.parentElement.parentElement;
    const newDescription = modalContent.querySelector(
      ".todoDescriptionEditingInput"
    );
    const itemTitle = modalContent.querySelector(".modalTitle");
    const itemEditingInput = modalContent.querySelector(
      ".todoTitleEditingInput"
    );
    const itemDescription = modalContent.querySelector(".modalDescription");
    const editBtn = modalContent.querySelector(".editBtn");

    itemTitle.classList.remove("hidden");
    editBtn.classList.remove("hidden");

    itemDescription.innerText = newDescription.value;

    if (itemEditingInput.value !== itemTitle.innerText) {
      columns[columnKey].items[itemIndex].title = itemEditingInput.value;
      itemTitle.innerText = itemEditingInput.value;
    }

    setColumns((prev) => {
      prev = { ...prev };
      prev[columnKey].items[itemIndex].description = newDescription.value;
      return prev;
    });
    setIsOpenEditingForm(false);
  };

  /**
   * Handle edit directly the current todo.
   * @param {object} e (event)
   */
  const handleEditToDo = (e) => {
    e.preventDefault();
    const saveEditingTitleBtn = e.currentTarget;
    const modalContent =
      saveEditingTitleBtn.parentElement.parentElement.parentElement;
    const editBtn = modalContent.querySelector(".editBtn");
    const itemEditingTitleInput = modalContent.querySelector(
      ".todoTitleEditingInput"
    );
    const itemTitle = modalContent.querySelector(".modalTitle");
    const itemDescription = modalContent.querySelector(".modalDescription");
    const itemEditingDescription = modalContent.querySelector(
      ".todoDescriptionEditingInput"
    );

    itemTitle.classList.remove("hidden");
    editBtn.classList.remove("hidden");

    itemTitle.innerText = itemEditingTitleInput.value;

    const itemIndex = specificItem.index;
    const columnKey = specificItem.columnKey;

    if (itemEditingDescription.value !== itemDescription.innerText) {
      columns[columnKey].items[itemIndex].description =
        itemEditingDescription.value;
      itemDescription.innerText = itemEditingDescription.value;
    }

    setColumns((prev) => {
      prev = { ...prev };
      prev[columnKey].items[itemIndex].title = itemTitle.innerText;
      return prev;
    });
    setIsOpenEditingForm(false);
  };

  /**
   * Handle remove directly the current todo.
   * @param {object} e (event)
   */
  const handleRemoveToDo = (e) => {
    const columnKey = specificItem.columnKey;
    const itemIndex = specificItem.index;
    setIsOpenModal(false);
    setColumns((prev) => {
      prev = { ...prev };
      prev[columnKey].items.splice(itemIndex, 1);
      return prev;
    });
    setIsOpenRemoveModal(false);
  };

  const handleSaveDueDate = (e) => {
    e.preventDefault();
    const modalContent =
      e.currentTarget.parentElement.parentElement.parentElement.parentElement;
    const dueTime = modalContent.querySelector(".dueTime");
    const dueTimeInput = modalContent.querySelector(".hourMinuteInput");

    dateObj.setTime(dueTimeInput.value);

    const dueDate = dateObj.date;
    const currentDate = dateObj.currentDate;
    dueDate.setHours(
      `${dueTimeInput.value.slice(0, 2)}`,
      `${dueTimeInput.value.slice(-2)}`
    );

    if (isInThePast(dateObj.date)) {
      dateObj.setTime("");
      return;
    }

    if (
      currentDate.getDate() === dueDate.getDate() &&
      currentDate.getMonth() === dueDate.getMonth() &&
      currentDate.getHours() === dueDate.getHours() &&
      currentDate.getMinutes() === dueDate.getMinutes()
    ) {
      dateObj.setBackgroundState({ backgroundColor: "#ff3e4e", color: "#fff" });
    }
    if (
      currentDate.getDate() === dueDate.getDate() &&
      currentDate.getMonth() === dueDate.getMonth() &&
      currentDate.getHours() === dueDate.getHours() &&
      currentDate.getMinutes() < dueDate.getMinutes()
    ) {
      dateObj.setBackgroundState({ backgroundColor: "#ffc93c", color: "#000" });
    }
    if (
      currentDate.getDate() < dueDate.getDate() &&
      currentDate.getMonth() <= dueDate.getMonth()
    ) {
      dateObj.setBackgroundState({
        backgroundColor: "rgb(239, 239, 239)",
        color: "#000",
      });
    }

    // setIsOpenCalendar(false)
    // setIsOpenEditingForm(false)
    // setIsOpenModal(false)
    // setSpecificItem({})
  };

  return (
    <>
      <BoardStyled className="Board">
        <DragDropContext onDragEnd={handleDragEnd}>
          {_.map(columns, (column, key) => {
						console.log(column)
            const columnID = column.id;
            /** Column */
            return (
              <ColumnStyled
                key={key}
                className="column"
                column_key={`${key}`}
                column_id={columnID}
              >
                <ColumnTitle className="columnTitle">
                  <ColumnStateIcon className="stateColumnIcon">
                    <StatusIcon className={`${key}`}></StatusIcon>
                  </ColumnStateIcon>
                  {column.title}
                </ColumnTitle>
                {/* -------------------------------------------------------------------------- */
                /*                                    Alert                                   */
                /* -------------------------------------------------------------------------- */}
                <AlertStyled className={"alert"}></AlertStyled>
                <Droppable droppableId={key}>
                  {(provided) => {
										{/* provided.droppableProps["data-rbd-droppable-context-id"] = 0 */}
										{/* console.log(provided) */}
										console.log(provided.droppableProps["data-rbd-droppable-context-id"])
                    return (
                      <TodoContainerStyled
                        className="todoContainer"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {/** ITEM */}
                        <TodoList
                          todoList={column.items}
                          handleShowToDoContent={handleShowToDoContent}
                        />
                        {provided.placeholder}

                        <ToDoForm
                          handleCreateToDo={handleCreateToDo}
                          handleRemoveToDoInputForm={handleRemoveToDoInputForm}
                        />
                        <AddBtnStyled
                          className={"addBtn"}
                          type={"submit"}
                          handleOnClick={handleShowToDoInputForm}
                          text={"+ add new card"}
                        ></AddBtnStyled>
                      </TodoContainerStyled>
                    );
                  }}
                </Droppable>
              </ColumnStyled>
            );
          })}
        </DragDropContext>
      </BoardStyled>
      {isOpenModal && (
        <ItemContent
          title={specificItem.title}
          description={specificItem.description}
          columnKey={specificItem.columnKey}
          handleRemoveToDoContent={handleRemoveToDoContent}
          handleEditToDo={handleEditToDo}
          handleShowEditToDoForm={handleShowEditToDoForm}
          isOpenEditingForm={isOpenEditingForm}
          handleRemoveEditToDoForm={handleRemoveEditToDoForm}
          handleEditDescription={handleEditDescription}
          handleRemoveToDo={handleRemoveToDo}
          isOpenRemoveModal={isOpenRemoveModal}
          handleShowRemoveModal={handleShowRemoveModal}
          handleHideRemoveModal={handleHideRemoveModal}
          isOpenCalender={isOpenCalender}
          handleShowCalendar={handleShowCalendar}
          handleSaveDueDate={handleSaveDueDate}
        />
      )}
    </>
  );
}

export const getServerSideProps = async () => {

	resetServerContext()   // <-- CALL RESET SERVER CONTEXT, SERVER SIDE
	renderToString()

	return {props: {ColumnAPI}}

}

export default Board;
