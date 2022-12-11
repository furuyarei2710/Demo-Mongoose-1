import { TextButton } from "../../../components/button/TextButton";
import { styled, theme } from "../stitches.config";

export const AddBtnStyled = styled(TextButton, {
  '&.addBtn': {
    minWidth: '100%',
    minHeight: '50px',
    backgroundColor: theme.colors.purpleColor1,
    px: 8,
    py: 16,
    border: 'none',
    fontSize: '0.9rem',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '10px',
    fontWeight: 'light',
    color: '#fff',
    textTransform: 'capitalize',
    position:'relative',
    top: '40px'
  },
  '&.addBtn:hover': {
    transition: 'all 0.3s linear',
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px -10px var(--purple-color-1)'
  },
  '&.addBtn.hidden': {
    display: 'none'
  }
})

export const CreateToDoActionsStyled = styled("div", {
  "&.actionsContainer": {
    display: 'flex',
    flexDirection: 'column',
		position: 'relative',
		left: '-2.1rem',
		top: '0.02rem',
    width: '320px'
  },
});

export const CreateToDoBtnStyled = styled(TextButton, {
  '&.createToDoBtn': {
    px: 12,
    py: 16,
    mt: 10,
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '0.8rem',
    border: 'none',
    color: '#fff',
    // background: `${theme.colors.darkShades7}`,
    backgroundColor: '#00C897',
    transition: 'all 0.25s ease',
    position: 'relative',
    top: '36px',
    br: '8px',
  },
  '&.createToDoBtn:hover': {
    transition: 'all 0.3s linear',
    transform: 'translateY(-5px)',
    boxShadow: `0 10px 20px -10px ${theme.colors.greenColor3}`
  }
})

export const CancelCreateToDoBtnStyled = styled(TextButton, {
  '&.cancelCreateToDoBtn': {
    px: 12,
    py: 16,
    mt: 10,
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '0.8rem',
    border: 'none',
    color: '#fff',
    background: `${theme.colors.redColor2}`,
    transition: 'all 0.25s ease',
    position: 'relative',
    top: '1.7rem',
    left: 0,
    br: '8px'
  },
  '&.cancelCreateToDoBtn:hover': {
    transition: 'all 0.3s linear',
    transform: 'translateY(-5px)',
    boxShadow: `0 10px 20px -10px ${theme.colors.redColor2}`
  }
})

