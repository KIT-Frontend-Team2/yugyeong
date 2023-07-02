import { useState } from "react";
import MaingPage from "./main";
import styled  from "styled-components"
import { flexCenter } from "../style/common";



const Start = () => {

  const [isBoolean, setIsBoolean] = useState(false);



  const onClick = () => {
    !isBoolean ? setIsBoolean(true) : setIsBoolean(false)
  }
  
  return(
    <S.Wrapper>
      {isBoolean ? <MaingPage/> : ''}
      {!isBoolean ? <button onClick={onClick}>시작하기 </button> : ''}  
    </S.Wrapper>
  )
}

export default Start;

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.Theme2.PALLETE.fg};
  width: 100%;
  height: 100vh;
  ${flexCenter};
  background: url('https://images.unsplash.com/photo-1618771622937-35409be962fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80') no-repeat fixed center;
`



const S = {
  Wrapper,

}