import { createTheme } from '@mui/material/styles';
const customTheme = createTheme({
  palette: {
    primary: { 
      main: '#A3B087', 
    },
    background: {
      default:'#FFF8D4' , 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', 
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8, 
  },
  
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
export default customTheme;

