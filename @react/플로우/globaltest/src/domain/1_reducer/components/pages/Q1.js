import React, { useReducer, useState } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";
import reducer from "../../../../store/1_reducer";

// useReducer는 디스패치, 액션,리듀서로 구성되어있다.
// 디스패치 : 상태업데이트를 위한 요구서를 액션으로 보낸다.
// 액션 : 요구의 내용(객체)
// 리듀서 : 업데이트 로직 분리화, 상태를 업데이트 한다. 

const ReducerQ1Page = () => {
  /* 
      문제 1)
      로직 분리하기
    
      재료 추가 로직 분리하기 ---> 업데이트 로직을 모듈화 : reducer 


      1) 재료 추가 로직 작성하기
      2) 재료 삭제 로직 작성하기

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요
    */

  const [ingredients, setIngredients] = useState([
    { id: 1, name: "피자 도우", price: 1000 },
    { id: 2, name: "토마토 소스", price: 500 },
    { id: 3, name: "치즈", price: 1000 },
    { id: 4, name: "피망", price: 500 },
    { id: 5, name: "양파", price: 500 },
  ]);

  const [state, dispatch] = useReducer(reducer, ingredients);

  const [inputValue, setInputValue] = useState({
    name: "",
    price: "",
})

// 디스패치를 통해 타이봐


  const onSubmit = (e) => {
    dispatch({
      type: 'ADD_MENU',
      payload: inputValue
    })
  }

  const handelDel = () => {
    dispatch({
      type: 'DELETE_MENU',
      payload : inputValue
    })
  }
  return (
    <>
      <h2>문제 1</h2>
      <table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        <ReducerQ1List ingredients={ingredients} onChange={handelDel}/>
      </table>
      <Q1Form onSubmit={onSubmit} onChange={inputValue} />
      <NavigateButton isFistPage to={"/2_context/q1"} />
    </>
  );
};
export default ReducerQ1Page;