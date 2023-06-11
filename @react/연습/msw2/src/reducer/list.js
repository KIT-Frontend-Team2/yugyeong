

// listtoto가 하는 역할
//개별리듀서가 하는일 
//1. createSlice에 서버응답값을 담을 초기값을 저장, 해당 값은 결국 store에 저장되어 전역상태로 등록
//2. extraReducer를 통해 액션을 정의,  (타입과 페이로드가 사용)
//3. 가장 마지막에 createAsyncThunk와 axios를 사용해 서버에 요청을 보내고 그 값을 받아오는 로직 작성 
//4. 통신함수를 extraReducr에서 사용함으로써 ?????
//5. 다른 컴포넌트 내에서 disptacth에 통신함수를 담아서 사용
//6. 그 값이 extra내부의 페이로드로 전달되어 업데이트 로직 적용
//7. 최종적으로 업데이트 된 로직을 렌더링하기 위해서 useSeletor를 이용해서 값을 추출해서 사용한다. 



// 작성순서 1 
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

// 작성순서 2
// list [] 데이터베이스의 내용이 들어간다. 
const initialState = {
  list : [],
  logicState: {
    loding: false,
    Success: false,
    error: null
  }

}



//전역상태에 초기값을 입력하고 
//액션을 정의를 한다. 
//서버로부터 요청과 응답을 받는 생성자 함수를 사용해 
//pending fulfilled rejected를 액션의 타입으로 나눠 경우에 따라 로직을 실행시킨다. 
// addClass는 인자르 두개 받는다 
// 작성순서 3
export const listSlice = createSlice({
  name: 'list',
  initialState,
  //// 작성순서 5 
  extraReducers: builder => {
    //조회
    //첫번째 매개변수 : 액션의타입, 두버째 매개변수 상태 업데이트 
    builder.addCase(getList.pending, (state) => {
      state.logicState.loding = true;
      state.logicState.Success = false;
      state.logicState.error = null;
    })
    builder.addCase(getList.fulfilled, (state, action) => {
      state.list = action.payload;
      state.logicState.loding = false;
      state.logicState.Success = true;
      state.logicState.error = null;
    })
    builder.addCase(getList.rejected, (state,action) => {
      state.logicState.loding = false;
      state.logicState.Success = false;
      state.logicState.error = action.payload;
    })

    //추가 AddList
    builder.addCase(AddList.pending, (state) => {
      state.logicState.loding = true;
      state.logicState.Success = false;
      state.logicState.error = null;
    })
    builder.addCase(AddList.fulfilled, (state, action) => {
      state.list.unshift(action.payload);
      state.logicState.loding = false;
      state.logicState.Success = true;
      state.logicState.error = null;
    })
    builder.addCase(AddList.rejected, (state,action) => {
      state.logicState.loding = false;
      state.logicState.Success = false;
      state.logicState.error = action.payload;
    })
  }
})




// 작성순서 4  요청 응답 생성자 함수 
// 다른 컴포넌트에서 디스패치에 사용해야하기때문에  export 시킨다. 


//슬라이스 네임+생성자함수명으로 액션생성성
// ex) todo/addTodo 
// todo라는 이름의 슬라이스 내에  addTodo를 생성하라 


//디스패치로 createAsyncThunk로 만들어둔  getList()를 실행
//  const res = await axios.get('/api/list')가 실행되어 
// 서버의 get('/api/list')에서 값을 가져와 반환
//  return res.data이 담기고 
// 그값은 'list/getList'의 액션 페이로드로 들어가게 된다. 
export const getList = createAsyncThunk('list/getList', async ()=>{
  // 데이터 통신 
  // 요청후 반환값을 res에 담고 res안 data에 값이 담긴다
  // 해당 경로에 get 요청을 보낸다. 

  //주소가 같아도 메소드가 다르면 다른 주소로 판단한다. 
  const res = await axios.get('/api/list')
  return res.data
})


// !json형태로 데이터를 서버로 전달 
export const AddList = createAsyncThunk('list/postList', async({title,content}) => {
  const res = await axios.post('/api/list',{title,content})
  return res.data 
})

