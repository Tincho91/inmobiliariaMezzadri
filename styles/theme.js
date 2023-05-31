import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
  colors: {
    blue: {
      100: '#393E51',
    },
    gray: {
      100: '#E9DEDC',
      200: '#83827B',
      300: '#50514B',
      400: '#43453F'
    },
  },
});

export default theme;