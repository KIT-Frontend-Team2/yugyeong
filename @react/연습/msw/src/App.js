
import './App.css';
import OneUser from './pages/onetime';

function App() {

  const onSubmit = () => {

  }

  return (
  <>
    
    <form onSubmit={onSubmit}> 
      <input name='user'/>
      <button>등록</button>
    </form>
  </>
  );
}

export default App;
