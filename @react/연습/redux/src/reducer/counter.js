


//초기값지저해줄수 있어 
export const reducer = (state = {value : 0}, action) => {
  switch(action.type){
    case 'INCREASE':
      return {value: state.value + 1}
    case 'DECREASE' : 
      return {value: state.value - 1}
    default : 
     return state 
  }
}