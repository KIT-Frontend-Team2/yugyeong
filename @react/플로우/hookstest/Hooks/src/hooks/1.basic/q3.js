import { useEffect, useState } from "react";
import Q3components from "../../components/1.basic/q3components";

function Q3() {

 // 뭔가를 보이고 안보이게 하고싶을떄 state에 불린값 넣어서 사용한다. 


  const [btn, setBtn] = useState(false);  
  const [count, setCount]  = useState(0);

  const OnStart = () => {
    setBtn(true)
  }

  useEffect(() => {
    if(btn){
      let interval= setInterval(()=>{
        setCount((prev) => prev + 1)
      }, 2000);
  
      return() => {
        clearInterval(interval)  // 처음마운트와 btn이 변할때 한번 총 두번 실행하기 위해서 
      }
    }
  },[btn])  // 배열의 값이 변경되었을때만 처리를 진행할 때 사용 


  const OnStop = () => {
    setBtn(false)
    console.log(count)
    setCount(0)
  }
  /* 
    문제3
    useEffect useState에 관련한 문제입니다
    단체 줄넘기 대회에 출전하였습니다

    줄넘기 시작 버튼을 누르면  ---> 클릭 이벤트 발생 
    Q3components 컴포넌트가 보입니다. ---> 

    Q3components 내부에는

    해당 컴포넌트가 보이기 시작한 시점부터 보이기 시작한 시점부터 ( 마운트에대한 이야기 )
    2초마다 줄넘기 횟수가 1회 씩 증가하는 비즈니스 로직이 존재합니다 ---> 시간마다 줄넘기횟수 증가 

    또한, 이러한 줄넘기 횟수 증가는 q3.js(index)에서도 확인할 수 있도록 --. 상태변화가 필요하다. 
    <p> 줄넘기 횟수 : 0 </p> 에 횟수로 표시됩니다

    줄넘기 중지 버튼을 누르면  ---> 클릭 이벤트 발생 
    해당 컴포넌트는 보이지 않아야하며, 줄넘기 횟수도 더이상 증가해서는 안됩니다.ㅠ --. 마운트 종료에대한 이벤트 
    또한, 줄넘기 횟수는 0으로 고정되어야합니다.--> state 초기화 

    스테이트 1개 
    effect 2개 
  */



  return (
    <>
      <h1>문제3</h1>
      <div>
        <p> 줄넘기 횟수 : {count}</p>  
        {btn && <Q3components />}
        <p>
          <button onClick={OnStart}>줄넘기 시작</button>
        </p>
        <p>
          <button onClick={OnStop}>줄넘기 중지</button>
        </p>
      </div>
    </>
  );
}
export default Q3;
