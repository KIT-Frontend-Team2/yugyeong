
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import OneUser from './pages/onetime';
import { AddList, getList } from './reducer/list';
import { useEffect } from 'react';

function App() {


  const listState = useSelector(state => state.list.list)
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getList())
  },[])

  console.log(listState)
  
  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.user.value;
    const content = e.target.content.value;
    console.log(title)
    console.log(content)
    dispatch(AddList({title,content}))
  }
  console.log(`추가`,listState )
  return (
  <>
    {listState.map((item)=><OneUser key={item.id} item={item}/>)}
    <form onSubmit={onSubmit}>
      <input name='user'/>
      <textarea name='content'> </textarea>
      <button>등록</button>
    </form>
  </>
  );
}

export default App;
