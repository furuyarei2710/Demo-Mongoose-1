import { useState } from "react";
import { AlertStyled } from "../../assets/css/components/AlertStyled";
import { utilsPackage } from "../../utils/utils";
import Alert from "../Alert";
import { TextButton } from "../button/TextButton";

export function InputTimeComponent(props) {
  const [time, setTime] = useState("");
  const handleOnChangeTime = (e) => {
    const inputField = e.currentTarget;
    const alertNotification = inputField.parentElement.querySelector(
      ".alert-validating-time"
    );
    setTime(inputField.value);
    if (inputField.value === '') {
      inputField.style.border = "none";
      return;
    }
    if (utilsPackage.time.validateHourMinute(inputField)) {
      inputField.style.border = "2px solid #4bb679";
      utilsPackage.style.alert.show(
        alertNotification,
        "Reasonable input",
        "#4bb679"
      );
    } else {
      inputField.style.border = "2px solid #ff3e4e";
      utilsPackage.style.alert.show(
        alertNotification,
        "Sorry, wrong input",
        "#ff3e4e"
      );
    }
  };
  return (
    <form method="post">
      <input
        type={props.type}
        className={props.className}
        onChange={handleOnChangeTime}
        value={time}
        placeholder={props.placeholder}
      />
      <AlertStyled className="alert-validating-time"></AlertStyled>
      <TextButton
        className={"btn saveCalendarBtn maxWidth"}
        type={"submit"}
        handleOnClick={props.handleSaveDueDate}
        text={"Save"}
      />
    </form>
  );
}
