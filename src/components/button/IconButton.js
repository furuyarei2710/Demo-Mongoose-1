export function IconButton(props) {
    return (
      <button
        type={props.type}
        className={props.className}
        onClick={props.handleOnClick}
      >
        {props.children}
      </button>
    );
  }