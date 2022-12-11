import { styled, theme } from "../stitches.config";

export const AlertStyled = styled("div", {
  "&.alert": {
    position: 'relative',
    top: '1rem',
    left: '3rem',
    fontWeight: 600
  },
  "&.alert-validating-time": {
    position: 'absolute',
    left: '14rem',
    top: '14.65rem',
    width: '100%',
    fontSize: '.8rem',
    fontWeight: 600,
    zIndex: 2
  }
});
