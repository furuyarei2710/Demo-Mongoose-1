import Link from "next/link";
import { styled } from "../stitches.config";
import { IconButton } from '../../../components/button/IconButton'

export const WorkspaceLogoStyled = styled("div", {
  "&.workspace-logo": {
    width: 10,
    height: 9,
    br: 50,
  },
});

export const WorkspaceLinkStyled = styled(Link, {
  "&.workspace-link": {
    display: "flex",
    alignItems: "center",
  },
});

export const WorkspaceNameStyled = styled("div", {
  "&.workspace-name": {
    position: "absolute",
    left: "2rem",
  },
});

export const CreateWorkspaceButton = styled(IconButton, {
  "&.create-workspace-btn": {
    position: "absolute",
		top: "4.8rem",
    left: "8rem",
		background: 'transparent',
		border: 'none'
  },
});


