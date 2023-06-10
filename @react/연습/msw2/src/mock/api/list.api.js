

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
export const AddList = rest.post('/api/list', async(rq, res, ctx) => {
  


})