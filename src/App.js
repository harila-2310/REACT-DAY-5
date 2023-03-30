
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import './App.css';
import Bar from './Components/Appbar';
import Product from './Components/Product';

const mytheme=createTheme(
  {
      palette:{
          primary:{
              main:"#6f42c1",
          }
      }
  }
)
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mytheme}>
      <Bar/>
      <Product/>
      </ThemeProvider>
    </div>
  );
}

export default App;
