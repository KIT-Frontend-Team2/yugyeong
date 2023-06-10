import { setupWorker } from "msw"
import * as ListApi from '../mock/api/list.api'


// *의 의미 :  todo.api에 있는 모든 export gksrp  객체로 가지고 와진다. 
const handler = [...Object.values(ListApi)]
// export한 api 함수들이 todoapi에 객체형태로 담겨 핸들러로 전달되고 
// 객체의 키와 벨류인 함수들을 배열로 생성 
export const worker = setupWorker(...handler)
// 가상 워커를 만들고 핸들러 등록 