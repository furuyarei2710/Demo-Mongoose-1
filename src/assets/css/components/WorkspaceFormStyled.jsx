import { styled, theme } from "../stitches.config";
import Image from "next/image";
import { TextBasedButtonStyled } from "./BasedButton";
import { TextButton } from "../../../components/button/TextButton";

export const CreateWorkspaceFormStyled = styled("form", {
  "&.create-workspace-form": {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "10rem",
    top: "11rem",
    backgroundColor: theme.colors.whiteColor1,
    width: "410px",
    height: "auto",
    minHeight: 550,
    border: "none",
    zIndex: 1,
    px: 24,
    py: 50,
    br: 8,
    boxShadow: "-1px 1px 4px 2px rgba(0, 0, 0, 0.08)",
  },
});

export const CreateWorkspaceFormHeading = styled("h1", {
  "&.create-workspace-form-heading": {
    fontWeight: 800,
    lineHeight: "4rem",
  },
});

export const WorkspaceNameLabelStyled = styled("label", {
  "&.workspace-name-label": {
    fontWeight: 600,
    position: "relative",
    top: "1rem",
  },
});

export const WorkspaceNameInputStyled = styled("input", {
  "&.workspace-name": {
    width: "226px",
    height: "40px",
    background: "#F3F3F3",
    br: 8,
    border: "none",
    px: 8,
    py: 16,
    position: "relative",
    top: "2rem",
  },
});

export const WorkspaceColorLabelStyled = styled("label", {
  "&.workspace-color-label": {
    position: "relative",
    top: "3.5rem",
    fontWeight: 600,
  },
});

export const WorkspaceColorInputStyled = styled("input", {
  "&.workspace-color": {
    width: "30px",
    height: "30px",
    borderColor: "transparent",
    border: "none",
    backgroundColor: "transparent",
    position: "relative",
    top: "4rem",
  },
});

export const WorkspaceBackgroundStyled = styled(Image, {
  "&.workspace-background": {
    position: "relative",
    top: "8rem",
    br: 8,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    objectFit: "cover",
  },
});

export const WorkspaceBackgroundLabelStyled = styled("label", {
  "&.workspace-background-label": {
    position: "relative",
    top: "5.5rem",
    fontWeight: 600,
  },
});

export const WorkspaceBackgroundInputStyled = styled("input", {
  "&.workspace-background-file": {
    position: "absolute",
    top: "20rem",
    border: "none",
    backgroundColor: "transparent",
    opacity: 0,
    zIndex: 1,
    cursor: "pointer",
    height: 35,
  },
});

export const ChooseBackgroundButtonStyled = styled(TextButton, {
  "&.choose-image-btn": {
    width: "140px",
    height: "30px",
    backgroundColor: "#5046E5",
    border: "none",
    color: theme.colors.whiteColor1,
    fontSize: ".7rem",
    br: 8,
    position: "relative",
    top: "7rem",
  },
  "&.choose-image-btn:hover": {
    opacity: 0.8,
  },
});

export const CreateWorkspaceSubmitStyled = styled(TextBasedButtonStyled, {
  "&.create-workspace-submit": {
    width: "100%",
    height: "35px",
    backgroundColor: theme.colors.purpleColor1,
    br: 8,
    color: theme.colors.whiteColor1,
    position: "relative",
    top: "9.2rem",
    cursor: "pointer",
  },
  "&.create-workspace-submit:hover": {
    transform: "scale(1.02)",
    transition: ".5s",
  },
});
