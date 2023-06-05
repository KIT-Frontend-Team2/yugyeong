import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";

// 컴바인은 리덕스와 리덕스 툴킷 모두 보유
//  컵바인쓰면 단일 객체로 생성되며, 키(리듀서이름) : 리듀서 형태로 값이 저장된다. 
// 하나의 리듀서에 액션이 두개여도 키는 하나여도 된다
const rootReducer = combineReducers({ counters : counterSlice.reducer})
export default rootReducer