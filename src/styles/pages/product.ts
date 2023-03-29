import { styled } from ".."

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',

  padding: "0 12rem",
  width: '100%',
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  minHeight: '600px',
  borderRadius: '8px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    userSelect: 'none',
  },
})

export const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$xxl',
    color: '$gray300'
  },

  span: {
    display: 'block',
    marginTop: '1rem',
    fontSize: '$xxl',
    color: '$green300'
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$lg',
    lineHeight: 1.6,
    color: '$gray300'
  },

  button: {
    marginTop: 'auto',
    padding: '1.25rem 0',
    cursor: 'pointer',

    backgroundColor: '$green500',
    borderRadius: '8px',
    border: 0,

    fontSize: '$md',
    color: '$white',
    fontWeight: 700,

    transition: 'background-color 0.2s',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  }
})