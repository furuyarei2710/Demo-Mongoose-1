import Link from "next/link";
import { styled, theme } from "../stitches.config";
import { IconButton } from "../../../components/button/IconButton";
import { IconBasedButtonStyled } from "./BasedButton";

export const MenuBtnStyled = styled(IconBasedButtonStyled, {
  "&.menu-btn": {
    fontSize: "1.6rem",
    position: "absolute",
    left: "14rem",
    top: "1.8rem",
		cursor: 'pointer'
  },
	'&.menu-btn:hover': {
		transition: '.5s',
		transform: 'scale(1.05)'
	}
});

export const NavbarLogoStyled = styled("p", {
  "&.navbar-logo": {
    fontSize: "1.6rem",
    fontWeight: 800,
    position: "absolute",
    left: "3rem",
    top: "1.5rem",
    zIndex: 1,
  },
});

export const CreateWorkspaceButton = styled(IconBasedButtonStyled, {
  "&.create-workspace-btn": {
    position: "absolute",
    top: "9.5rem",
    left: "11.5rem",
    fontSize: "1.2rem",
  },
});

export const WorkspaceNavBarStyled = styled("div", {
  "&.navbar": {
    backgroundColor: theme.colors.whiteColor1,
    width: 240,
    position: "absolute",
    height: "100%",
    boxShadow: "-1px 1px 4px 2px rgba(0, 0, 0, 0.25)",
    border: "none",
    transform: "translateX(-72%)",
    transition: "0.5s",
  },
  "&.navbar.show": {
    transform: "translateX(-1%)",
    transition: "0.5s",
  },
});

export const WorkspaceNavBarListStyled = styled("ul", {
  "&.navbar-list": {
		position: 'relative',
		left: '-30px'
	},
});

export const WorkspaceNavBarItemStyled = styled("li", {
  "&.navbar-item": {
    px: 8,
    py: 8,
  },
});

export const WorkspaceNavBarLinkStyled = styled(Link, {
  "&.navbar-link": {
    textDecoration: "none",
    color: theme.colors.blackColor1,
    fontWeight: 500,
    position: "relative",
    left: "2.2rem",
    top: "1.5rem",
  },
});

export const WorkspaceLogoStyled = styled("div", {
  "&.workspace-logo": {
    width: 10,
    height: 9,
    br: 50,
    position: "absolute",
    left: ".8rem",
  },
});

export const WorkspaceLinkStyled = styled(Link, {
  "&.workspace-link": {
    display: "flex",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
  },
});

export const WorkspaceNameStyled = styled("div", {
  "&.workspace-name": {
    position: "relative",
    left: "2rem",
    color: theme.colors.darkShades4,
  },
});

export const WorkspaceItemStyled = styled("li", {
  "&.workspace-item": {
    position: "relative",
    top: "2rem",
    left: "3rem",
    fontSize: ".9rem",
    listStyleType: "none",
    mt: 8,
  },
});

export const SeeMoreDetailWorkspaces = styled(Link, {
  "&.see-more-detail-workspace": {
    textDecoration: "none",
    color: theme.colors.blueColor1,
    fontWeight: 600,
    fontSize: ".9rem",
    position: "relative",
    top: "4rem",
    left: "4rem",
  },
});

export const NavbarItemName = styled('span', {
	'&.navbar-item-name': {
		position: 'absolute',
		left: '2rem'
	}
})