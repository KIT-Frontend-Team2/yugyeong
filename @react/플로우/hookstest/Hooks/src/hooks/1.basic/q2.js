import { useRef, useState } from "react";


// 강제 렌더링의 중요한 점 :  
//  setForceRender((prev) => !prev);로 값이 변화해서 상태값이 변화하면 리렌더 발생한다. 
//  함수가 처음부터 다시 실행된다. 
//  다만 함수 실행(리렌더)만된다는거지 화면 노출까지 할려면 retrun에 실행할 결과를 전달해야한다. 


function Q2() {
  const arr = useRef([])
  const [forceRender, setForceRender] = useState(false);
  const [list, setList] = useState([""])
  const inputRef = useRef("")  // inputRef라는 객체 생성 초기값을 "" 
  const color = useRef(null)
  
  const onAddList = () => {
    const inputValue = inputRef.current.value;
    arr.current.push(inputValue);
    setForceRender((prev) => !prev); // true로 값이 변경 함수 재실행 변수 초기화 / ref값은 유지 
    // console.log(arr.current)
    // console.log(inputValue)  
    inputRef.current.value = "";
  };

  
  const onClick = () =>{
    setList(
      <ul>
        {arr.current.map((arrs,index) => <li key={index}>{arrs}</li>)}
      </ul>
    )
  }

  const btnColor = ()=> {
    color.current.style.color ="red"
  }

  // (forceRender &&  arr.current.map((arrs,index) => <li key={index}>{arrs}</li>))
  return (
    <>
      <h1>문제2</h1>
      <div>
        <h2>문제 2-1</h2>
        <p> 
          <input 
            type="text"
            ref={inputRef}  // 초기값 ""배열을 전달하며 input 태그와 연결 
          />
        </p>
        <p>
          <button onClick={onAddList}>추가</button>
        </p>
        <p>
          <button onClick={onClick}>제출</button>
        </p>
        { forceRender ? "" : <p>제출된 목록이 없습니다</p> }
        <ul>{list}</ul>
      </div>
      <div>
        <h2>문제 2-2</h2>
        <p ref={color}> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
        <button onClick={btnColor} >변경</button>
      </div>
    </>
  );
}
export default Q2;



            // value={inputValue} //  input 값 초기화 
            //onChange={ e => setInputValue(e.target.value)} -->  
            /** setForceRender((prev) => !prev); 를 만나면 강제 리렌더 되어 변경된 값이 화면에 노출되는 데 
             * 현재 input의 값을 값이 변화하면 바로 리렌더 시키는 state로 받고 있기 때문에 input에 값을 입력만해도 화면에 값이 노출되는 것 
            */
 /* 
    문제2

    2-1)
        useRef에 관련한 문제입니다.

        // 강게제런더링 시켜주는 state하나 
        // 

        추가 버튼을 누르면 input에 있던 value는 배열 arr에 추가됩니다.
        그러나, 추가 버튼을 누를 때마다 강제 랜더링 상태가 무조건 적으로 업데이트 됩니다.

        이러한 상황에서 제출버튼을 누르면

        지금까지 추가하였던 목록 배열(arr)이 
        <ul>의 li의 항목으로 추가되어야합니다.  
      

        만약 제출되었을 때 아무런 항목이 없다면
        <p>제출된 목록이 없습니다</p>이 노출되어야하며

        제출된 항목이 있다면
        <ul>만 노출되어야 합니다

        이를 useRef의 특성을 고려하여 풀이해보세요 :)

    2-2)
        문제 2-2는 변경 버튼을 클릭하면
        p태그의 색상이 다른 색상으로 변경됩니다.
        
        이는 state를 사용하는 것이 가장 올바른 방법이지만
        어를 사용할 수 없는 어쩔 수 없는 상황에 놓여있습니다.

        따라서 useRef는 사용하여 해당 문구의 색상을 변경해보세요 :)
  */
