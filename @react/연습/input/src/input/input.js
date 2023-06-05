
import React, { useState } from "react"

function InputSample(){

  const [text, setText] = useState("");

  const onChange = (e) => {
    //console.log(e.target);  // 사용자가 클릭한 태그의 돔에 대한 정보
    //console.log(e.target.value) // 그 돔에 담긴값 
    //console.log(e.target.placeholder) 
    //console.log(e.target.type)
    //console.log(text) setText 이전에 text에는"""값만 담겨있다. 
    setText(e.target.value);
    console.log(text)
  }


  const onReset = () => {
    setText("")
  }

  return(
    <div>
      <input 
      onChange={onChange} 
      placeholder="이유경"
      type="text"
      value={text} // text에 입력한 정보가 담기는 value에 useState의 값이 담기는 text를 넣어야 초기화 할떄 input의 값도 지워진다. 
      />
      <button onClick={onReset}>클릭</button>
      <div>
        <p>값: {text}</p>
      </div>
    </div>
  )
}

export default InputSample