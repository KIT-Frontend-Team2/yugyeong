
// 어떤구현할지를 정하자 
import { initialState } from "../data/data";
import { rest } from 'msw'



/**
 * 부가 정보 
 * 2xx (성공): 요청이 성공적으로 처리되었음을 나타냅니다.

    200 (OK): 요청이 성공적으로 처리되었고, 응답에 필요한 데이터가 포함되어 있습니다.
    201 (Created): 요청이 성공적으로 처리되었고, 새로운 리소스가 생성되었습니다.
    204 (No Content): 요청은 성공적으로 처리되었지만, 응답에는 별도의 데이터가 없습니다.
    4xx (클라이언트 오류): 클라이언트에 오류가 있음을 나타냅니다.

    400 (Bad Request): 클라이언트의 요청이 잘못되었거나 부적절한 구문으로 작성되었습니다.
    404 (Not Found): 요청한 리소스가 서버에서 찾을 수 없습니다.
    401 (Unauthorized): 클라이언트가 인증되지 않았거나 인증이 만료되었습니다.
    5xx (서버 오류): 서버에 오류가 발생함을 나타냅니다.

    500 (Internal Server Error): 서버 내부에서 오류가 발생했습니다.
    503 (Service Unavailable): 서버가 일시적으로 사용할 수 없는 상태입니다.
 */

    //HTTP 응답은 일반적으로 헤더(Header)와 본문(Body)으로 구성
    // 실제 값은 본문에 담긴다. 


//
// awit이 사용되지 않지만 async를 넣은 이유는 후에추가적으로 비동기르 사용할지 모르기  때문 
// ctx.status(200)와 ctx.json(todoMock)은 동기 작업으로서 즉시 실행되고, 해당 값을 응답으로 반환합니다. 따라서 await 키워드를 사용할 필요가 없다. 
// _가 없는 이유 
// 클라이언트로 요청을 받아도 무시하겠다는 의미  
// 따라서 사이트를 마운트 했을떄 map으로 도릴지 않고 아무것도 안나왔던 거임 

export const getList = rest.get('/api/list', async(_,res,ctx) => {
  return res(ctx.status(200), ctx.json(initialState))
})


