
// 무엇이든 why? 가 중요한것.. 


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

// 요청을 통해 데이터 베이스에서 가져올 데이터를 담을 공간이될 초기값 필요 
//초기값은 서버에서 받아올 정보를 담아둘 임시 공간
const initialState = {
  list: [],
  addListState : {
    loding : false,
    Success: false,
    err: null
  },
  deleteListState : {
    loding: false,
    Success: false,
    err: null
  }

}


// initialState의 의미 
// initialState의 []에는 요청을 통해 가지고올 data.js의 값이 입력된다. 
// data.js를 품은 initialState를 createSlice에 등록하면서 data.js의 값이 액션의 페이로드로 전달된다. 




/**
 *  부가 정보 
 * 
 * // 동기액션 
 * // 액션이 디스패치되면 즉시 처리됩니다
 * // 단순한 상태 변경이나 동기적인 작업을 처리
 * // 버튼을 클릭하면 해당 버튼의 상태를 변경하는 동작
 *  reducers: {
    addTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
  // 비동기 액션 
  // 액션이 디스패치된 후 일정 시간이 지난 후에 처리
  // 외부 API 호출 등의 작업을 처리하는 데 사용
  // 비동기 액션은 주로 네트워크 요청, 데이터 가져오기, 파일 시스템 액세스 등 시간이 걸리는 작업을 다룰 때 사용
  // 예를 들어, 서버에서 데이터를 가져오는 요청을 보내고, 그에 대한 응답이 올 때까지 기다렸다가 데이터를 처리하는 작업은 비동기 액션으로 처리 
  // CRUD는  비동기 액션으로 처리
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
 * 
 */






// 따라서 createSlice에 리듀서가 아닌 extraReducers를 사용해야한다. 
// crud를 구현할 예정이기 때문에 

//builder
// createSlice 함수의 매개변수로 액션 타입에 따라 리듀서 로직을 작성하는 데 사용되는 메서드들을 포함하는 객체
//builder를 사용하여 여러 개의 액션 타입과 그에 대한 리듀서 로직을 정의할 수 있다.
//Immer를 활용하여 불변성을 유지하면서 상태를 업데이트가능 
// 
export const counterSlice = createSlice({
  name: 'list',
  initialState,
  extraReducers: builder => {
    builder.addCase(getList.panding, (state) => {
      console.log(state); 
    })
  }
})


// 작성흐름 
// 요청하는 코드를 작성하기전에 응답하는 코드를 작성하는게 옳은 흐름이다. 
// 요청할꺼 : 조회 , 추가, 삭제 
//통신으로 데이터 불러오기 

export const getList = createAsyncThunk('/list/getlist', async() => {
  const res = await axios.get('/api/list');
  return res.data
})






