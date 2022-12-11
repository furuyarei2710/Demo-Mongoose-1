import { styled, theme } from "../stitches.config";
import { RiCloseLine, RiEdit2Line } from "react-icons/ri";
import { TextButton } from "../../../components/button/TextButton";
import { IconButton } from "../../../components/button/IconButton";
import { BiCalendar } from "react-icons/bi";
import Image from 'next/image'

export const ModalDarkBackgroundStyled = styled("div", {
  "&.darkBackground": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: "112%",
    height: "120vh",
    position: "absolute",
    top: "20rem",
    left: "40rem",
    transform: "translate(-50%, -50%)",
  },
});

export const ModalCenterStyled = styled("div", {
  "&.center": {
    position: "fixed",
    top: "60%",
    left: "63%",
    transform: "translate(-50%, -50%)",
  },
});

export const ModalFormStyled = styled("div", {
  "&.modal": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minWidth: "945px",
    minHeight: "670px",
    background: "white",
    color: "white",
    zIndex: 10,
    borderRadius: "16px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
    px: 8,
    py: 48,
    position: "relative",
    top: "-30px",
    right: "8rem",
  },
});

export const ModalCloseBtnStyled = styled("button", {
  "&.closeBtn": {
    cursor: "pointer",
    fontWeight: 500,
    px: 4,
    py: 8,
    br: 50,
    background: theme.colors.redColor3,
    border: "none",
    fontSize: "18px",
    color: "#fff",
    transition: "all 0.25s ease",
    boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.06)",
    position: "absolute",
    right: 0,
    top: "-12px",
    alignSelf: "flex-end",
    mt: "-7px",
    mr: "-7px",
  },
  "&.closeBtn:hover": {
    boxShadow: `0 10px 20px -10px ${theme.colors.redColor3}`,
    transform: "scale(1.08)",
  },
});

export const ModalCloseIconStyled = styled(RiCloseLine, {
  "&.closeIcon": {
    mb: "-3px",
  },
});

export const ModalContentStyled = styled("div", {
  "&.modalContent": {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    color: "#2c3e50",
    textAlign: "center",
    position: "relative",
    bottom: "90px",
  },
});

export const ModalTitleStyled = styled("h1", {
  "&.modalTitle": {
    textAlign: "left",
    position: "relative",
    top: "-165px",
    fontWeight: 700,
  },
  "&.modalTitle.hidden": {
    display: "none",
  },
});

export const ModalListOfTodoDetailsStyled = styled("ul", {
  "&.modalListOfTodoDetails": {
    position: "absolute",
    top: "-3rem",
  },
});

export const ModalTodoDetails = styled("li", {
  "&.todoDetails": {
    position: "relative",
    top: "-20px",
    lineHeight: "2.4rem",
    listStyleType: "none",
  },
  "&.todoDetails:nth-child(1) .modalStatus, &.todoDetails:nth-child(2) .modalAssignee, &.todoDetails:nth-child(3) .modalDueDate":
    {
      color: "#a4a4a4",
      fontWeight: 500,
    },
});

export const AboutStatus = styled("h2", {
  "&.modalStatus": {
    position: "absolute",
    top: "2.5rem",
    fontSize: "0.95rem",
    fontWeight: 400,
    color: "#a4a4a4",
  },
});

export const ModalStatusTextStyled = styled("span", {
  "&.modalStatusText": {
    position: "absolute",
    left: "7.8rem",
    fontSize: "0.95rem",
    color: "#000",
  },
});

export const AboutAssignee = styled("h2", {
  "&.modalAssignee": {
    position: "absolute",
    fontSize: ".95rem",
  },
});

export const AboutAssigner = styled("span", {
  "&.modalAssigner": {
    position: "absolute",
    top: "-1rem",
    left: "8rem",
  },
});

export const AssignerAvatarStyled = styled(Image, {
  
    borderRadius: "50%",
    position: "relative",
    top: "1rem",
});

export const AboutDueDateStyled = styled("h2", {
  "&.modalDueDate": {
    position: "absolute",
    top: "5rem",
    left: "-10rem",
    width: "400px",
    px: 2,
    py: 8,
    fontSize: ".95rem",
  },
});

export const AboutDueDateTextStyled = styled("span", {
  "&.dueDateText": {
    position: "absolute",
    left: "17.8rem",
    color: theme.colors.blackColor2,
  },
});

export const AboutDueTimeTextStyled = styled("span", {
  "&.dueTimeText": {
		position: 'absolute', 
		top: '-0.1rem',
		right: '-8rem',
		px: 0,
		py: 0,
		width: '120px',
		br: 8
	},
});

export const EditBtnStyled = styled(IconButton, {
  "&.editBtn": {
    backgroundColor: "transparent",
    border: "none",
    display: "block",
    float: "right",
    fontSize: "0.95rem",
    cursor: "pointer",
    position: "relative",
    top: "-12.5rem",
    right: "9rem",
  },
  "&.editBtn.hidden": {
    display: "none",
  },
});

export const EditBtnIconStyled = styled(RiEdit2Line, {
  "&.editIcon": {
    fontSize: "2rem",
  },
  "&.editBtn:hover": {
    transition: "0.5s",
    transform: "scale(1.15)",
  },
});

export const CalendarBtnStyled = styled(IconButton, {
  '&.calendarBtn': {
    position: 'fixed',
    top: '1.15rem',
    right: '14.5rem',
    cursor: 'pointer',
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: 'none'
  }
})

export const CalendarTemplate = styled(BiCalendar, {
  '&.calendarIcon': {
    fontSize: '2rem'
  }
})

export const DescriptionHeadingStyled = styled("p", {
  "&.descriptionHeading": {
    position: "absolute",
    top: "6.5rem",
    fontSize: "1rem",
    fontWeight: 700,
  },
});

export const ModalDescriptionStyled = styled("p", {
  "&.modalDescription": {
    position: "absolute",
    top: "8rem",
    left: "-.5rem",
    fontSize: "1rem",
    border: "none",
    width: "778px",
    whiteSpace: "normal",
    wordBreak: "break-all",
    px: 24,
    py: 18,
    fontWeight: 450,
    textAlign: "left",
  },
  "&.modalDescription.hidden": {
    display: "none",
  },
});

export const ToDoTitleInputStyled = styled("input", {
  "&.todoTitleEditingInput": {
    px: 8,
    py: 24,
    resize: "none",
    outline: "none",
    backgroundColor: "rgb(239, 239, 239)",
    position: "absolute",
    bottom: "160px",
    left: 0,
    width: "490px",
    height: "59px",
    fontSize: "1rem",
    fontWeight: 500,
    border: `3px solid ${theme.colors.purpleColor2}`,
    br: "12px",
  },
});

export const ToDoDescriptionInputStyled = styled("textarea", {
  "&.todoDescriptionEditingInput": {
    px: 16,
    py: 24,
    resize: "none",
    outline: "none",
    backgroundColor: "rgb(239, 239, 239)",
    position: "absolute",
    top: "8.5rem",
    left: "0.5rem",
    width: "778px",
    fontSize: "1rem",
    border: `3px solid ${theme.colors.purpleColor2}`,
    br: "12px",
  },
});

export const DeleteBtnStyled = styled("div", {
  "&.deleteBtn": {
    width: "93px",
    height: "39px",
    background: "#1f2135",
    br: "6px",
    position: "absolute",
    top: "16rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: ".5s",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    overflow: "hidden",
    cursor: "pointer",
  },
	'&.deleteBtn.hidden': {
		display: 'none'
	},
  "&.deleteBtn:hover": {
    transform: "scale(1.04)",
  },
  "&.deleteBtn:hover .deleteTrashIcon::before": {
    transform: "rotate(-90deg) translateX(50%) translateY(-10px)",
  },
  "&.deleteBtn:hover .deleteTrashIcon": {
    transform: "scale(1.5) rotate(60deg) translateY(10px)",
  },
});

export const DeleteBtnTrashIcon = styled("span", {
  "&.deleteTrashIcon": {
    position: "absolute",
    left: "12px",
    width: "15px",
    height: "15px",
    display: "inline-block",
    backgroundColor: "#fff",
    borderBottomLeftRadius: "3px",
    borderBottomRightRadius: "3px",
    transition: "0.5s",
  },
  "&.deleteTrashIcon::before": {
    display: "block",
    content: "",
    position: "absolute",
    top: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#fff",
    boxShadow:
      "12px -2px 0 #333, 12px -3px 0 #333, 15px -1px 0 #333, 6px -2px 0 #fff",
    transition: "0.5s",
  },
});

export const DeleteTextStyled = styled("div", {
  "&.deleteText": {
    position: "absolute",
    left: "2.3rem",
    color: "#fff",
  },
});

/* -------------------------------------------------------------------------- */
/*                                Remove Modal                                */
/* -------------------------------------------------------------------------- */

export const RemoveModalStyled = styled("div", {
  "&.removeModal": {
    position: "absolute",
    top: "13rem",
    left: "-1.3rem",
    width: "416px",
    minHeight: "109px",
  },
});

export const RemoveModalHeadingStyled = styled("h3", {
  "&.removeModalHeading": {},
});

export const ModalTitleEditingActions = styled("div", {
  "&.todoTitleActions": {
    position: "absolute",
    top: "-10.5rem",
    left: "9.0rem",
  },
});

export const AcceptToDoTitleActionStyled = styled(TextButton, {
  "&.saveEditingTitle": {
    px: 8,
    py: 16,
    mt: "10px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "0.8rem",
    border: "none",
    color: "#fff",
    background: theme.colors.greenColor3,
    transition: "all 0.25s ease",
    position: "relative",
    top: "36px",
    borderRadius: "5px",
  },
	'&.saveEditingTitle:hover': {
		transition: 'all 0.3s linear',
		transform: 'translateY(-5px)',
		boxShadow: `0 10px 20px -10px ${theme.colors.greenColor3}`
	}
});

export const RejectToDoTitleActionStyled = styled(TextButton, {
  "&.cancelEditingTitle": {
    px: 8,
    py: 16,
    mt: "10px",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "0.8rem",
    border: "none",
    color: "#fff",
    backgroundColor: theme.colors.redColor2,
    transition: "all 0.25s ease",
    position: "absolute",
    top: "36px",
    left: "5rem",
    br: "5px",
  },
	'&.cancelEditingTitle:hover': {
		transition: 'all 0.3s linear',
		transform: 'translateY(-5px)',
		boxShadow: `0 10px 20px -10px ${theme.colors.redColor2}`
	}
});

export const AcceptToDoDescriptionActionStyled = styled(TextButton, {
  "&.saveEditingDescription": {
    px: 8,
    py: 16,
    mt: "10px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "0.8rem",
    border: "none",
    color: "#fff",
    background: theme.colors.greenColor3,
    transition: "all 0.25s ease",
    position: "relative",
    top: "36px",
    borderRadius: "5px",
  },
	'&.saveEditingDescription:hover': {
		transition: 'all 0.3s linear',
		transform: 'translateY(-5px)',
		boxShadow: `0 10px 20px -10px ${theme.colors.greenColor3}`
	}
});

export const RejectToDoDescriptionActionStyled = styled(TextButton, {
  "&.cancelEditingDescription": {
    px: 8,
    py: 16,
    mt: "10px",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "0.8rem",
    border: "none",
    color: "#fff",
    backgroundColor: theme.colors.redColor2,
    transition: "all 0.25s ease",
    position: "absolute",
    top: "36px",
    left: "5rem",
    br: "5px",
  },
	'&.cancelEditingDescription:hover': {
		transition: 'all 0.3s linear',
		transform: 'translateY(-5px)',
		boxShadow: `0 10px 20px -10px ${theme.colors.redColor2}`
	}
});

export const ModalDescriptionEditingActions = styled("div", {
  "&.todoDescriptionActions": {
    position: "absolute",
    top: "12.5rem",
    left: "20rem",
  },
});

export const RemoveActionsStyled = styled("div", {
  "&.removeActions": {
    position: "absolute",
    top: 0,
    left: "8.5rem",
  },
});

export const AcceptToDoRemovingActionStyled = styled(TextButton, {
  "&.saveRemovingTodo": {
    px: 8,
    py: 16,
    mt: "10px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "0.8rem",
    border: "none",
    color: "#fff",
    background: theme.colors.greenColor3,
    transition: "all 0.25s ease",
    position: "relative",
    top: "36px",
    borderRadius: "5px",
  },
	'&.saveRemovingTodo:hover': {
		transition: 'all 0.3s linear',
		transform: 'translateY(-5px)',
		boxShadow: `0 10px 20px -10px ${theme.colors.greenColor3}`
	}
});

export const RejectToDoRemovingActionStyled = styled(TextButton, {
  "&.cancelRemovingTodo": {
    px: 8,
    py: 16,
    mt: "10px",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "0.8rem",
    border: "none",
    color: "#fff",
    backgroundColor: theme.colors.redColor2,
    transition: "all 0.25s ease",
    position: "absolute",
    top: "36px",
    left: "5rem",
    br: "5px",
  },
	'&.cancelRemovingTodo:hover': {
		transition: 'all 0.3s linear',
		transform: 'translateY(-5px)',
		boxShadow: `0 10px 20px -10px ${theme.colors.redColor3}`
	}
});

