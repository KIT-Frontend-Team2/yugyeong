
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { increase,decrease } from './reducer/action';
// 리덕스 
// 1. 저장소 생성 : createStore()
// 2. 리듀서 생성 :  rootReducer, combineReducers
// 3. 액션생성  

function App() {

  const counter = useSelector((state) => state.reducer.value)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>REDUX TOOKIT</h1>

      <button onClick={() => dispatch(increase())}>증가</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrease())}>감소</button>
    </div>
  );
}

export default App;
