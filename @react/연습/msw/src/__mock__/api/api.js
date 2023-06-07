
// 어떤구현할지를 정하자 
import { initialState } from "../data/data";
import { rest } from 'msw'


//
// awit이 사용되지 않지만 async를 넣은 이유는 후에추가적으로 비동기르 사용할지 모르기  때문 
export const getList = rest.get('/api/list', async(_,res,ctx) => {
  return res(ctx.status(200), ctx.json(initialState))
})