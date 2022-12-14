import { TextButton } from "../../../../components/button/TextButton";
import { styled, theme } from "../../stitches.config";

export const UserTableStyled = styled("table", {
	'&.users-table': {
		width: '100%',
		borderSpacing: 0,
		borderCollapse: 'collapse',
		px: 16,
		py: 24,
		position: 'relative',
		top: '2rem',	
	}
});

export const UserTableHeadingStyled = styled('th', {
	'&.user-table-heading': {
		px: 8,
		py: 16,
		border: `1px solid ${theme.colors.blackColor1}`
	}
})

export const UserTableContentStyled = styled('td', {
	'&.user-table-content': {
		px: 8,
		py: 16,
		border: `1px solid ${theme.colors.blackColor1}`
	}
})

export const UserTableActionStyled = styled('td', {
	'&.user-table-action': {
		px: 8,
		py: 16,
		border: 'none'
	}
})

export const UserBasedActionStyled = styled(TextButton, {
	'&.user-table-action-btn': {
		width: 120,
		height: 40,
		border: 'none',
		backgroundColor: 'transparent',
		px: 8,
		py: 16,
		br: 8,
		cursor: 'pointer',
		color: theme.colors.whiteColor1
	},
	'&.create-action': {
		backgroundColor: theme.colors.greenColor2
	},
	'&.update-action': {
		backgroundColor: theme.colors.yellowColor1
	},
	'&.delete-action': {
		backgroundColor: theme.colors.redColor2
	},
})

export const UserCreateActionstyled = styled(UserBasedActionStyled, {
	'&.create-action': {
		backgroundColor: theme.colors.greenColor2
	},
	'&.update-action': {

	},
	'&.delete-action': {

	}
})


