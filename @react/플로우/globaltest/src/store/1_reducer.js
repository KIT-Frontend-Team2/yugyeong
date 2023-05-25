
// 
// 액션은 디스패치의 내용을 수령한다. 
// state는 처음에 보낸 초기값이 담겨있음으로 불변성을 지켜야한다. 

const reducer = (state, action)=> {
  console.log(state,action)
  // switch(action.type) {
  //   case 'ADD_MENU':
  //     const { name, value } = action.payload;
  //     return {
  //       ...state,
  //       inputValue: {
  //         ...state.inputValue,
  //         name : ""
  //       },
  //     };
  //   case 'DELETE_MENU':
  //     const { id } = action.payload;
  //     return {
  //       ...state,
  //       ingredients: state.ingredients.filter((item) => item.id !== id),
  //     };
  //   default:
  //     return state;
  // }
}

export default reducer