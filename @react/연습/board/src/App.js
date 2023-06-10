
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PostMain from './components/postMain';
import PostWrite from './components/PostWrite';
import PostView from './components/Postview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostMain/>}/>
          <Route path='/write' element={<PostWrite/>}/>
          <Route path='/veiew' element={<PostView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
