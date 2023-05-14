

import { useState } from "react";
import styled from "styled-components";

function Q1() {
  /* 
    문제1
    useState 및 styled-components에 관련한 문제입니다.
    아래 문제를 통해 어떠한 경우 state를 사용해야하는지 고민하여 풀어보세요

    1-1 )
        문제1-1은 input의 value가 placeholder의 값과 같아졌다면
        초록색 글씨로 올바르게 입력하셨습니다가 노출됩니다.

        만약 입력하지 않았다면 올바르게 글을 작성해주세요라는 문구가
        붉은색 글씨로 노출됩니다

    1-2 )
        문제1-2는 보이기 버튼을 누른다면

        button 내부의 텍스트는 숨기기로 바뀌고
        아래 보이는 p태그가 보여야합니다.

        반대로 숨기기 텍스트로 바뀐 button을 누르면
        p태그는 보이지 않아야합니다

  */


  const [text, setText] = useState(false); // 상태관리 필요한 요소들을 초기값으로 저장
  const [btnHidden, setbtnHidden] = useState(true);


  const onChange = (e) => {
    const inputValue = e.target.value;
    const inPlace = e.target.placeholder;

    (inputValue === inPlace) ? setText(true) : setText(false);
    
  }

  

  return (
    <>
      <h1>문제1</h1>
      <div>
        <h2>문제1-1.</h2>
        <input
          type="text"
          placeholder={"김성용"}
          style={{ textAlign: "center" }}
          onChange={onChange}
        />
        <S.Message props={text}> { text === true ? `올바르게 입력하셨습니다.` : `올바르게 입력해주세요` } </S.Message>
        {/* { text === true ? <S.Message>올바르게 입력하였습니다.</S.Message> : <S.ReMessage>올바르게 입력해주세요</S.ReMessage>} */}
      </div>

      <div>
        <h2>문제1-2. </h2>
        <button onClick={(prev) => {
          setbtnHidden( (prev) = !prev )
        }}>{btnHidden === true ? `보이기` : `숨기기`}</button>
        <p>{btnHidden === true ? ` ` : `이 문구는 보이기 상태일 때만 볼 수 있습니다`}</p>
      </div>
    </>
  );
}
export default Q1;


const Message = styled.p`
  color: ${({props}) => {return props ? "#e6e6e6" : "f3f3f3"}}
`;

// const ReMessage = styled.p`
// color: #f46056;

// `;
const S = {
  Message,
  //ReMessage
};


