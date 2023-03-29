import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollbarColor: 'transparent transparent',
    scrollbarWidth: '0px',
    '-ms-overflow-style': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
      width: 0,
    },
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400
  }
})