import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme({
  palette: {
    primary: {
      main: '#348323',
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ['xs', 'sm', 'md', 'lg'],
  factor: 3,
  disableAlign: true,
});

export default theme;
