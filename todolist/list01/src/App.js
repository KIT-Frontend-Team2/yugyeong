
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Theme } from './style/theme';
import Context from './store/context';
import { RouterProvider } from 'react-router-dom';
import router from './router/routing';


function App() {
  
  return (

    <Context>
      <ThemeProvider theme={Theme}>
          <RouterProvider router={router}/>
      </ThemeProvider>
    </Context>

  );
}

export default App;
