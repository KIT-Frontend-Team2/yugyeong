

// 리덕스랑 다르게 초기값 설정 

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value :  0 
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase : (state ) => {
       state.value += 1
    },
    decrease: state => {
      state.value -= 1
    },
  }
})

// 다른곳에 이거 사용할떄는 액션이다..
export const {increase, decrease} = counterSlice.actions