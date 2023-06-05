import React, { useState } from 'react';
// input 내가 직접 지워야해 

function InputSample3() {


const [input, setInput] = useState("")

const onChange = (e) =>{
  setInput(e.target.value)
}

const onRet = () => {
  setInput("")
}


// jsx 안에 속성을 넣은 순간 나는 변수 혹은 함수를 사용한거야 , 즉 위에 정의하는 선언문 있어야해 
// input 이벤트 핸들러가 생겼고  input의 속성들이 키와  벨류 값을 들어간 e 객체가 매개변수로 넘어감 
  return (
    <div>
      <input 
      value={input}
      onChange={onChange}/>
      <button onClick={onRet}>초기화</button>
      <div>
        <b>값: {input}</b>
      </div>
    </div>
  );
}

export default InputSample3;