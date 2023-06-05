
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increase, decrease } from './reducer/counter';

function App() {

  // --> provider를통해 전체에 내려주고있는 상태를 매개변수로 가져오고 있다. 
  // const count = useSelector(상태 => console.log(상태.counters.value))
  const count = useSelector(상태 => 상태.counters.value)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <h1>REDUX TOOKIT</h1>

      <button onClick={() => dispatch(increase())}>증가</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrease())}>감소</button>
    </div>
  );
}

export default App;
