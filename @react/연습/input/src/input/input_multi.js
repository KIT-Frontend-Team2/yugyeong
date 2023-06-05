

import React, { useState } from 'react';


function InputSample4() {


const [inputs, setinputs] = useState({
  name : "",
  nickName : "",
})

const {name, nickName }= inputs;

  const onChange = (e) => {
    setinputs(e.target.value)
  };

  const onReset = () => {
    setinputs("")
  };

  //value={input} 사용하면 하나의 상태이기 떄문에 같은 state가 초기화 된다. 
  // 투개를 구분해줄 필요가 있다. 
  
  return (
    <div>
      <input placeholder="이름" onChange={onChange} name='name' />
      <input placeholder="닉네임" onChange={onChange} name='nickName' />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        이름 (닉네임)
      </div>
    </div>
  );
}


export default InputSample4