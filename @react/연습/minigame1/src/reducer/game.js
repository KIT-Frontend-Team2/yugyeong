import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  game: [],
  addGameState: {     // 백엔드와 통신은 비동기라 시간이 소요 // 사람들이 그동안 볼 로딩페이지를 위해 필요 
    loading: false,   // 로딩중엔 성공하면 x 니깐 false 
    Success: false,      // 나중에 treu 변경 
    err: null,
  },
};

export const gameSlice = createSlice({
  name: "game", // 이슬라이스의 이름 
  initialState,
});

