
import './App.css';
import {useSelector } from "react-redux";
import OneUser from './pages/onetime';


function App() {

  const listState = useSelector((state) => state.list.list);
  console.log(`셀렉터로 가져온값 ` ,listState)

  
  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.user.value;
    const content = e.target.content.value;
    console.log(title)
    console.log(content)
  }

  return (
  <>
    {listState.map((itme)=><OneUser key={itme.id}/>)}
    <form onSubmit={onSubmit}> 
      <input name='user'/>
      <textarea name='content'> </textarea>
      <button>등록</button>
    </form>
  </>
  );
}

export default App;
