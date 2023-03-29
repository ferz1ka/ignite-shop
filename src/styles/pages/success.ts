import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  magin: '0 auto',
  minHeight: '600px',

  h1: {
    fontSize: '$xxl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: '550px',
    lineHeight: 1.4,
    textAlign: 'center',
    marginTop: '2rem',
  },

  a: {
    display: 'block',
    marginTop: '5rem',

    fontSize: '$lg',
    fontWeight: 700,
    color: '$green500',
    textDecoration: 'none',

    transition: 'color 0.2s',
    '&:hover': {
      color: '$green300',
    }
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '130px',
  height: '145px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: '8px',

  marginTop: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})