import { styled, keyframes } from "..";

const topFadeIn = keyframes({
  '0%': { transform: 'translateY(-15%)', opacity: 0, },
  '100%': { transform: 'translateY(0%)', opacity: 1 },
});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  overflow: 'hidden',

  '&::before': {
    content: '',
    position: 'fixed',
    top: 0,
    left: 0,

    width: '10%',
    height: '100vh',
    background: 'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',
    transform: 'rotate(180deg)',

    zIndex: 1,
    pointerEvents: 'none',
  },

  '&::after': {
    content: '',
    position: 'fixed',
    top: 0,
    right: 0,

    width: '10%',
    height: '100vh',
    background: 'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',

    zIndex: 1,
    pointerEvents: 'none',
  },

  animation: `${topFadeIn} 1.25s ease both`,
})


export const Header = styled('header', {
  padding: "2rem 0 2rem 12rem",
  width: '100%',
})