
// 고유성을 가진 id를 키값으로 설정해 
const ReducerQ1List = ({ ingredients,DeleteValue  }) => {
  return (
    <tbody>
      {ingredients.map((ingredient) => (
        <tr  key={ingredient.id}>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick ={ ()=>{DeleteValue(ingredient.id)} } >삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;