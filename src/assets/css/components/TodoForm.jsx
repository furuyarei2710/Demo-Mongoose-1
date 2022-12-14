import { styled, theme } from "../stitches.config";

export const CreateTodoFormStyled = styled("form", {
  "&.createTodoForm": {
    display: "none",
    minWidth: "400px",
		minHeight: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "1rem",
    color: "rgb(120, 120, 120)",
    pt: 16,
    pr: 36,
    pb: 56,
    pl: 36,
  },
  "&.createTodoForm.show": {
    display: "block",
  },
});

export const CreateTodoFormInputStyled = styled("input", {
  "&.todoInput": {
    width: '325px',
		border: `1px solid ${theme.colors.darkShades1}`,
		outline: 'none',
		fontSize: '.9rem',
		px: 12,
		py: 16,
		backgroundColor: `${theme.colors.whiteColor1}`,
		position: 'relative',
		top: '1.6rem',
		left: '-2.2rem',
		borderRadius: '8px'
  },
});