
import React, { useState } from "react"
import styled from "styled-components";

function InputSample2(){

  const [text, setText] = useState(false);

  const onChange = (e) => {
    const inputValue = e.target.value;
    const inPlace = e.target.placeholder;  // 사용자가 입력하는 값은 저장되는값이지 변화해서 리렌더시켜줄 값이 아니라 state에 담아선 안된다. 

    if(inputValue === inPlace){
      setText(true)
    }else{
      setText(false)
    }
  }


  return(
    <div>
      <input 
      onChange={onChange} 
      placeholder="이유경"
      type="text"
      />
      <div>
        <p>값: </p>
        { text ? <S.Message > 올바르게 입력하셨습니다 </S.Message> :  <S.ReMessage>올바르게 입력해주세요 </S.ReMessage> }
      </div>
    </div>
  )
}

const Message = styled.p`
  color: #12b886;
`;

const ReMessage = styled.p`
  color: #f46056;
`;

const S = {
  Message,
  ReMessage
}



export default InputSample2

