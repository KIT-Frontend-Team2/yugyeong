const ReducerQ1List = ({ ingredients,handelDel }) => {
  return (
    <tbody>
      {ingredients.map((ingredient) => (
        <tr>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onChange={handelDel}>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
