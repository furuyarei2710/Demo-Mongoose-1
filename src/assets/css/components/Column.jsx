import { styled, theme } from "../stitches.config";
import { AiTwotoneCheckCircle } from "react-icons/ai";

export const ColumnStyled = styled('div', {
	'&.column': {
		width: "22%",
    padding: '10px',
	}
})

export const ColumnTitle = styled('h3', {
	'&.columnTitle': {
		fontSize: '1.1rem',
    color: '#000',
    position: 'relative',
		textTransform: 'capitalize'
	}
})

export const ColumnStateIcon = styled('span', {
	'&.stateColumnIcon': {
		position: 'relative',
		top: '4px',
		marginRight: '40px'
	}
})

export const StatusIcon = styled(AiTwotoneCheckCircle, {
	'&.notStarted': {
		color: theme.colors.redColor1
	},
	'&.inProgress': {
		color: theme.colors.yellowColor1
	},
	'&.completed': {
		color: theme.colors.greenColor3
	}
})
