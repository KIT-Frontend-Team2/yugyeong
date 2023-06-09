import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./list";



//odoSlice.reducer는 실제로 extraReducers를 포함한 리듀서 함수입니다. reducers 필드가 비어 있어도 createSlice가 정상적으로 동작
// slice에서 reducer 없이 extra만 써도 다음과 같이 표현해야한다. 
const rootReducer = combineReducers({list : counterSlice.reducer})
export default rootReducer