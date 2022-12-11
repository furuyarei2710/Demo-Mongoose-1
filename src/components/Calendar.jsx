import { useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TextButton } from "./button/TextButton";
import { DateContext } from "./context/DateContext";
import { InputTimeComponent } from "./input/Input";

function CalendarComponent({ handleShowCalendar, handleSaveDueDate }) {
  const dateObj = useContext(DateContext);
  return (
    <>
      <div className="app">
        <div className="calendar-container">
          <Calendar
            onChange={dateObj.setDate}
            value={dateObj.date}
            locale="en-GB"
            minDate={new Date()}
          />
          <InputTimeComponent
            className={"hourMinuteInput"}
            type={"text"}
            placeholder={"Enter the time"}
            handleSaveDueDate = {handleSaveDueDate}
          />
          <div className="calendarActions">
            <TextButton
              className={"btn cancelCalenderBtn maxWidth"}
              type={"submit"}
              handleOnClick={handleShowCalendar}
              text={"Remove"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CalendarComponent;
