// form 태그 사용시 버튼에 직접적인 이벤트를 주지않아고 실행된다. 
// value 값으로 추적한다. 
const Q1Form = ({ onSubmit,inputValue}) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" name="name" placeholder="재료" value ={inputValue.name}/>
      </label>
      <label>
        <input type="number" name="price" placeholder="가격" value ={inputValue.price} />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;