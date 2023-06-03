import { useState } from "react";
import styled from "styled-components";

function Comment({name, content, myComment, onChangeContent,handleDelete}) {

  // 현재 받은 값 : name={items.User.nickname} content={items.content}
  // 수정버튼을 누르면 키값을 찾아서 그걸 토대로 내용을 바꿔줘야해 
  // 바꿀려면 기존값, 현재값이 필요하다.!!  또 기존 배열 변경 시키기 위한 setPost 도 필요 
  // 잠시만.. 변경할려면 입력값을 다시 받아야 ... ? 


  // 그렇다면 사용자 입력을 받을 수 있는 태그로 변환필요 
   // 새로운 컨텐츠 입력값을 받아야하는데요 
  const [isValue, setIsValue] = useState(false)
  const [upcontent, upSetContent] = useState('')



  
  const handleChange = () => {
    if(!isValue) return setIsValue(true)
    onChangeContent(upcontent, name)
    setIsValue(false)
  }


  const onchange = (e) => {
    upSetContent(e.target.value)
    console.log(upcontent)
  }

  const handleDelChange = () => {
    handleDelete(name,myComment)
  }

  return (
    <S.CommentItem>
      <p>
        작성자: <span>{name}</span>
      </p>
      {isValue ? <textarea value={upcontent} onChange={onchange}></textarea> : <p> 댓글 내용: <span>{content}</span></p>}
      <button onClick={handleChange} name="new">수정</button>
      <button onClick={handleDelChange}>삭제</button>
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
