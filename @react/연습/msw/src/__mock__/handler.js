

import { setupWorker } from "msw"
import * as ListMsw from './api/api'
// 이름은 아무거나 지어도 된다. 


// 페이지 엔드포인트별로 로직을 담담하는 함수를 모두 객체형태로 저장함 
const handler = [...Object.values(ListMsw)]
// 저장된 변수를 등록시킴 
// 일꾼 setworker : 요청을 가로채고 가짜응답을 반환함 
export const worker = setupWorker(...handler)




