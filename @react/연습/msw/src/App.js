
import './App.css';
import OneUser from './pages/onetime';

function App() {

  const onSubmit = (e) => {
    e.preventDefult();
    const title = e.target.user.value;
    const content = e.target.content.value;
    console.log(title)
    console.log(content)
  }

  return (
  <>
    {/* {.map((itme)=><OneUser/>)} */}
    <form onSubmit={onSubmit}> 
      <input name='user'/>
      <textarea name='content'> </textarea>
      <button>등록</button>
    </form>
  </>
  );
}

export default App;
