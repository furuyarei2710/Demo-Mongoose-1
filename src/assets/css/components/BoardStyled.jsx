import { styled } from "../stitches.config";

export const BoardStyled = styled("div", {
  "&.Board": {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    position: "relative",
    top: "180px",
    backgroundColor: "transparent",
  },
});
