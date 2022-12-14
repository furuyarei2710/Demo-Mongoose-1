import { styled, theme } from "../stitches.config";

export const OperatorUserForm = styled("form", {
	'&.user-crud-form': {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		minWidth: "400px",
		minHeight: "auto",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontSize: "1rem",
    color: "rgb(120, 120, 120)",
    pt: 16,
    pr: 36,
    pb: 56,
    pl: 36,
		transition: '.5s'
	},

});

export const OperatorUserFormLabel = styled("label", {
	'&.user-crud-label': {
		fontWeight: 600,
		color: theme.colors.blackColor1,
		px: 8,
		py: 0
	},
	
});


export const OperatorUserFormInput = styled("input", {
	'&.user-crud-input': {
		width: '350px',
		borderColor: 'transparent',
		border: 'none',
		backgroundColor: '#F3F3F3',
		position: 'relative',
		px: 16,
		py: 24,
		br: 10,
		
	},
	
});

export const OperatorUserFormAction = styled('input', {
	'&.user-crud-action': {
		color: theme.colors.whiteColor1,
		border: 'none',
		px: 8,
		py: 16,
		width: 240,
		color: theme.colors.whiteColor1,
		position: 'absolute',
		bottom: '-4rem',
		left: '3.8rem'
	},
	'&.create': {
		backgroundColor: theme.colors.greenColor2,
	},
	'&.update': {
		backgroundColor: theme.colors.yellowColor1,
	}
})

export const GenderOptionStyled = styled('div', {
	'&.genderOptions': {
		position: 'absolute',
		top: '25rem'
	}
})