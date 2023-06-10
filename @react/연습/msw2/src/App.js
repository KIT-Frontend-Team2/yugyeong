
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import OneUser from './pages/onetime';
import { getList } from './reducer/list';
import { useEffect } from 'react';

function App() {


  const listState = useSelector(state => state.list.list)
  const dispatch = useDispatch();


  const List = () => {
    dispatch(getList())
  }

  useEffect(() => {
    List()
  })

  console.log(listState)
  
  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.user.value;
    const content = e.target.content.value;
    console.log(title)
    console.log(content)
  }

  return (
  <>
    {listState.map((item)=><OneUser key={item.id} title={item.title} content={item.content}/>)}
    <form onSubmit={onSubmit}>
      <input name='user'/>
      <textarea name='content'> </textarea>
      <button>등록</button>
    </form>
  </>
  );
}

export default App;
