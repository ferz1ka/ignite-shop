import { styled } from "..";

export const HomeContainer = styled('main', {
  pointerEvents: 'none',
  userSelect: 'none',

  padding: "0 0 0 12rem",
  width: '100%',

  display: 'grid',
  placeContent: 'center',
  position: 'relative',
})

export const LeftControlContainer = styled('button', {
  pointerEvents: 'all',

  position: 'fixed',
  top: '55%',
  left: 24,
  zIndex: 2,
  cursor: 'pointer',
  // background: 'rgba(32, 32, 36, 0.7)',
  background: 'transparent',
  border: 0,
  borderRadius: '8px',
  lineHeight: 0,

  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.25)',
  }
})

export const RightControlContainer = styled('button', {
  pointerEvents: 'all',

  position: 'fixed',
  top: '55%',
  right: 24,
  zIndex: 2,
  cursor: 'pointer',
  // background: 'rgba(32, 32, 36, 0.7)',
  background: 'transparent',
  border: 0,
  borderRadius: '8px',
  lineHeight: 0,

  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.25)',
  }
})

export const ProductContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '3rem',
  paddingRight: '12rem',

  overflowX: 'scroll',
  scrollBehavior: 'smooth',
  scrollSnapType: 'x mandatory',
})

export const Product = styled('div', {
  pointerEvents: 'all',
  scrollSnapAlign: 'start',

  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: '8px',
  cursor: 'pointer',
  position: 'relative',
  overflowX: 'scroll',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '600px',
  minWidth: '600px',

  img: {
    objectFit: 'cover',
    userSelect: 'none',
  },

  footer: {
    userSelect: 'none',
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    padding: '2rem',
    borderRadius: '6px',
    background: 'rgba(32, 32, 36, 0.9)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})