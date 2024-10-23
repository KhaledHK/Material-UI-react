
import './App.css';
import Home from './Pages/Home';
import Add from './Pages/Add';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {  createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#fefefe'
    // },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
   
    <BrowserRouter>
    <Layout>

<Routes> 
  <Route path='/add' element={<Home/>} />
   <Route path='/' element={<Add/>} />
 </Routes>
 
 </Layout>
     </BrowserRouter>
      
</ThemeProvider>
  );
}

export default App;
