const Q1Form = ({ onSubmit,inputValue,onClick }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" name="name" placeholder="재료" value={inputValue.name}  />
      </label>
      <label>
        <input type="number" name="price" placeholder="가격" value={inputValue.price}/>
      </label>
      <button type="submit" onClick={onClick}>추가</button>
    </form>
  );
};
export default Q1Form;