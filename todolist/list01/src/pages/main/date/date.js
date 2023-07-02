import styled from "styled-components";
import { flexBetween, flexCenterColumn } from "../../../style/common";


const getDate = () => {
  
  const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
  const today = new Date();
  const today_month = today.getMonth()+1;
  const today_date = today.getDate();
  const today_day = today.getDay();
  const today_label = week[today_day]
  const yesr = today.getFullYear(); 
  
  return(
    <Wrapper>
      <Left>
      <h1>{today_date}</h1>
      <LeftInner>
        <span>{today_month}</span>
        <span>{yesr}</span>
      </LeftInner>
    </Left>
    <div>
      {today_label}
    </div>
    </Wrapper>
  )
}

export default getDate


const Wrapper = styled.div`
${flexBetween}
`
const Left = styled.div`
${flexBetween}
`
const LeftInner = styled.div`
${flexCenterColumn}
margin-left: 10px;

&span{
  text-align: left;
  color: red;
}

`

