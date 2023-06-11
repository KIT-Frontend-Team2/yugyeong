import { useDispatch, useSelector } from "react-redux"
import { delteList } from "../reducer/list";

const OneUser =  ({item}) => {

  const dispatch = useDispatch();
  const {title, content, id} = item


  const onClick = () => {
    //페이로드는객체 , 전달할떄 객체로 넘겨야한다. 
    dispatch(delteList({id}))
  }

  return(
    <div>
      {title}
      {content}
      <button>수정</button>
      <button onClick={onClick}>삭제</button>
    </div>
  )
}

export default OneUser