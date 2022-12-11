export function TextButton(props) {
    return (
      <button
        type={props.type}
        className={props.className}
        onClick={props.handleOnClick}
      >
        {props.text}
      </button>
    );
  }