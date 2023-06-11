

// 서버응답부분 
import {rest} from 'msw'
import { listMock } from '../data/data'


// 이름은 같지 않아도 된다. 서로독립적, 주소만 같으면된다. 
// 핸들러의 등록할때 객체형태로 등록되는데 
// GETliST는 키 REST가 값이다. 
// [...Object.values(ListApi)] 는 키를 빼고 값만 가져와서 배열로 만들어주는것이기 때문에 결국 getList필요가 없다. 
// 따라서 해당 getList는 개별 리듀서에 있는 getList와 아무 상관이 없다. ~!!!! 

//조회
export const getList = rest.get('/api/list', async(_,res, ctx) => {
  return res(ctx.status(200), ctx.json(listMock))
}) 


//추가 
// 추가 로직을 위해 필요한 3가지
// 1. 사용자요청을 받아 자바스크립트 객체형태로 변환해줄 코드
// 2. 객체값을 저장할 변수 
// 3. 그 변수를 활용해 새로운 객체로 생성해서 응답할 코드 
// 실행순서 : 컴포넌트에서 dispatch(요청함수)를 호출--> 
//  await(자바스크립트 변환) --> 변수 할당 --> 응답객체 생성 ---> list.js 요청에서 해당응답을 액션의 페이로드로 extarreducer로 전달--> 리듀서 실행, 
//
export const AddList = rest.post('/api/list', async(req, res, ctx) => {
  
  let title;
  let content;

   // 1.클라이언트가 보낸 json형태의 데이터 값을 자바스크립트 객체형태로 변환 
   // 프로미스 반환
   await req.json().then(data => {
    title = data.title;
    content= data.content;  // 해당 부분은 요청함수에서 매개변수로 작성되어야 있어야한다. 
   }) 

   // 새로운 객체를 생성, json 형태로 응답,
  return res(
    ctx.status(200),
    ctx.json({
      id: Math.floor(Math.random() * 1000000),
        title,
        content,
        state: false,
    })
  )
})