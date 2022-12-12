import { Draggable } from "react-beautiful-dnd";
import Alert from "./Alert";
import Todo from "./Todo";

function TodoList({
  todoList,
  handleShowToDoContent,
  showAlert,
  alert,
  type,
  show,
  message
}) {
  return (
    <>
      {todoList.map((item, index) => {
        return (
          <Draggable key={item.id} index={index} draggableId={item.id}>
            {(provided) => {
              return (
                /** Item */
                <>
                <Todo
                  provided={provided}
                  index={index}
                  {...item}
                  handleShowToDoContent = {handleShowToDoContent}
                  alert = {alert}
                  showAlert = {showAlert}
                />
                </>
              );
            }}
          </Draggable>
        );
      })}
    </>
  );
}

export default TodoList;
