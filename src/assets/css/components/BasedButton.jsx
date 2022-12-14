import { IconButton } from "../../../components/button/IconButton";
import { TextButton } from "../../../components/button/TextButton";
import { styled } from "../stitches.config";

export const TextBasedButtonStyled = styled(TextButton, {
	backgroundColor: 'transparent',
	border: 'none'
});

export const IconBasedButtonStyled = styled(IconButton, {
	backgroundColor: 'transparent',
	border: 'none'
});

