import { styled } from "../stitches.config";

export const UnderlineStyled = styled("div", {
	'&.underline': {
		display: 'block',
		content: "",
		position: 'absolute',
		top: '4.5rem',
		left: '0.6rem',
		width: '88%',
		height: '2px',
		backgroundColor: 'black',
		opacity: '.3',
	}
});
