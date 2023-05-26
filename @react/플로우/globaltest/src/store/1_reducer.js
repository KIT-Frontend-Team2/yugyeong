// 초기값
// 손님이 제출하는 요구와 데이터가 필요 
// 초기값과 action으로 넘어온 객체 존재
//{
//	name : '',
//	price : '', 
// })
// state 객체는 초기값과 액션으로 전달된 페이로드 객체를 포함하는 전체 상태이다. 
// 따라서 액션으로 넘어온 객체를 사용하고자 할떄 state.상태명 



const reducer = (state, action) => {
  switch(action.type){
    //input에 업데이트 객체를 담기 
  case 'UPDATE_INPUT' :
	return {
	...state,
	inputValue: {
    ...state.inputValue,
    [action.payload.name] : action.payload.value
  }
	}
  // 기본 데이터 모음에 객체를 넣기 
  // 넣기전에 새 변수 만들어서 id키값 추가후 넣기 
	case 'ADD_LIST' :
    const newInput = {
      ...state.inputValue,
      id: Math.floor(Math.random() * 10000),
    }
	return{
    ...state,
    ingredients : [...state.ingredients, newInput]
  }
	case 'DELETE_LIST' : 
	return {
    ...state,
    ingredients : state.ingredients.filter((item)=> item.id !== action.payload.id)
  }
	default :
	return state
}
}	

export default reducer




// ...state, // 기존 상태 복사
// inputValue: {
//   ...state.inputValue, // 기존 inputValue 복사 // 기존 초기값에 ㅇ액션으로 넘어온 객체 복사 
//   name: 'Apple', // 사용자 입력 값 추가
// },


// const newInput = {
//   ...inputValue, 
//    id : Math.Math.floor(Math.random() * 10000)
// }

// setIngredients([	
// ...ingredients,
// newInput 
// ])

// setIngredients();
// (ingredients) =>{ingredients.filter((item)=>{item.id !== id}