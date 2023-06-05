
//createStore 
import { createStore } from 'redux'
import rootReducer from '../reducer/reducer';

export const store = createStore(
  rootReducer
);  // 리덕스 툴킷 사용하라는 당근 