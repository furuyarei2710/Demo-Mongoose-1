import { styled, theme } from "../stitches.config";

export const TodoContainerStyled = styled("div", {
	'&.todoContainer': {
		width: '100%',
		borderRadius: '7px',
		minHeight: '150px'
	}
});

export const TodoStyled = styled("div", {
	'&.todo': {
		color: '#383838',
		backgroundColor: 'white',
		border: '1px solid #f0f1fa',
		px: 16,
		py: 24,
		mt: 24,
		br: 8,
		position: 'relative',
		top: '8px',
		maxWidth: '350px',
		minHeight: 'auto',
		whiteSpace: 'normal',
		wordBreak: 'break-all'
	}
});

export const TodoTitleStyled = styled("h4", {
	'&.todoTitle': {
		display: 'inline-block',
		width: '180px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		fontSize: '1rem',
		color: 'rgb(120, 120, 120)'
	}
});

export const TodoDescriptionStyled = styled("p", {
	'&.todoDescription': {
		padding: '4px 0 0 0',
		fontSize: '0.9rem',
		display: 'inline-block',
		width: '240px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		fontWeight: 500
	}
});