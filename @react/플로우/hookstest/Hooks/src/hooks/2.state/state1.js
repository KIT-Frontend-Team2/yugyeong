import PlayListMock from "../../__mock__/playList.json";
import {useState} from 'react'
function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  // input에 데이터를 받기위한 저장소 1개 
  // map을이용해서 배열의 객체를 개별 객체로 분활 
  // 핸들 이벤트 두개 동작 추가 / 삭제로 버튼은 각 한번씩 동작 --> true false가 필요 --> state 하나 
  // 추가 이벤트  --> return으로 div를 반환하면 된다. 
  // 삭제 이벤트  --> 삭제 filter 사용 


  // 기준1 
  //-- 1. 데이터의 저장및  변경가능성
  // -- 2. ui의 변화


  // 데이터의 변화 
  const [playList, setPlayLIst] = useState(PlayListMock.playlist);
  const [inputValue, setInputValue] = useState({
    title: "",
    signer : ""
  })

  // 상태로 관리되는 두개의 값을 두개의 변수로 만들어 사용하기 
  const {title, signer} = inputValue;

  const onChange = (e) => {
    // input 이벤트객체를 구성하는 input의 속성들중 속성의 키값을 분리하여 매칭시킬준비하기 
    const { value, name } = e.target ;
   setInputValue({
      ...inputValue,
      [name] : value // name: title, 혹은 signger,  사용자가 입력하는 값에 따라 어느 곳에 입력할지 커서가 켜지고 , 입력되는 값이 value로 "" 안에 들어가진다. 
    })
  };

const onAddPlayList = () => {
   setPlayLIst([...playList, inputValue ])
     setInputValue({
       title: "",
       signer: "",
     });
}

const handleDelte = (title) => {
   setPlayLIst(playList.filter((item)=>
   item.title !== title
   ))
}

// 삭제 이벤트 함수 콜백함수로 전달하는 이유 
//추가 버튼 누르면 상태값 변화해서 리렌더 되면서 삭제 함수도 강제 실행 
// 콜백함술는 비동기로 작동해서 즉시실행을 막아준다. 
// {handleDelte(item.title)}} 하는 이유는 :  


  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        { playList.map((item, index) => {
          return(
            <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.signer}</p>
            <button onClick={() => {handleDelte(item.title)}}> 삭제 </button>
          </li> 
          )
        } )}
        <li>
          <h3>Summer</h3>
          <p>Joe Hisaishi</p>
        </li>
      </ul>
      <div>
        <p>
          곡명 : <input 
                  name="title"
                  value={title} // 값에 담길걸 변수로 담을 수있께 설정 
                  onChange={onChange} />
        </p>
        <p>
          가수/작곡 : <input 
                      name="signer"
                      value={signer}
                      onChange={onChange}/>
        </p>
        <p>
          <button onClick={onAddPlayList}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;