import { useRef, useState } from "react";
import styled from "styled-components";
import Comment from "../../components/2.state/comment";

function State2() {
  /*  
    문제 2.

    Q1. 아래 작성된 state의 mock data를 활용하여
        댓글 목록을 화면에 랜더링 해보세요 :)
        Components는 src/components/state/comment.js를 활용하세요
        
    Q2. 댓글 작성 수정 삭제 기능을 구현해보세요 :)
            1. 댓글 작성 기능--> 
            2. 댓글 수정 기능
            3. 댓글 삭제 기능 ( 본인이 작성한 댓글만 삭제할 수 있습니다, myComment 활용 )
    */

  // 

  // 기능 구현 
  // 사용자가 이름과 댓글을 작성 후 등록하면 카운트가 증가하며 화면에 렌더링된다. 
  // 동작 순서 
  // 1. 사용자의 입력값을 받는다. 
  // 2. 배열에 담는다. 
  // 3. 추가버튼을 누르면 렌더링이 발생한다. 
  
  // 필요기능 
  // 0. 조회 : 화면에 목록 뿌려주기 
  // 1. 추가 : 사용자가 입력한 값 + id 값을 생성하여 기존 배열에 추가한다. 
  // 2. 수정 : 수정하고자 하는 id를 찾고 일치한다면 해당 객체 내부의 컨텐츠를 새로 입력 한 컨텐츠로 교체 
  // -->  데이터 배열을 업데이트 하는 함수를 자식 컴폰넌트에게 배열의 값과 함꼐 전달 
  // 3. 삭제 : id 값을 찾고 일치한다면 해당 객체조건과 일치하는 새로운 배열 생성 


  // 사용자 데이터 받아오기 :  ref --> 정상참조하기 위해서 핸들러 내부에서 값을 받아야한다. 

  


  const [post, setPost] = useState({
    title: "안녕하세요 여러분 김성용 강사입니다 :)",
    content: "오늘도 모두 화이팅입니다!",
    User: {
      nickname: "김성용",
      age: 20,
      height: 190,
    },
    Comments: [
      {
        User: {
          nickname: "김사과",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "반하나",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "오렌지",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "이멜론",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "박수박",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
    ],
  });

// 사용자 값을 입력 받기 
  const userName = useRef('');
  const userContext = useRef(''); 

  // // // 사용자 구별하기 
  // const [isMyComment, setIsMyComment] = useState(post.Comments.myComment)


  // 외부에서 참조하면 오류가 발생한다. 그 이유: ref는 렌더링과 상관없이 값을 참조하는데 핸들러 외부에서 사용하게되면 undefined 값에 접근하게되서 typeerror가 나타난다. 

  
  // const userName2 = userName.current.value
  // const userContext2 = userContext.current.value
  // console.log(userName2)
  // console.log(userContext2)


  const handleAdd = () => {
    const userName2 = userName.current.value
    const userContext2 = userContext.current.value
    console.log(userName2)
    console.log(userContext2)
    const newUserInfo = {
      User: {
        nickname: userName2,
      },
      content: userContext2,
      myComment: false,
    } // comment 내부의 형태를 작성해주고 
    setPost({
      ...post,
      Comments: [...post.Comments, newUserInfo]
    })
    // 보낼떄는 post전체를 복사후에  Comments: [...post.Comments, newUserInfo] 동일한 형태로 복사 
    // 그대로 복사해주는게 중요 왜냐
    // 위에 객체 형태랑 똑같이 치는게 정답???? 
  }

  // 수정하는 로직 
  // 
  const handleContent = (upcontent, name) => {
    const _post = [...post.Comments]
    const newPost = _post.find((post) => post.User.nickname === name )
    newPost.content = upcontent
    setPost({...post, _post})
  } 


    // 삭제 버튼을 누른다. 그럼 true로 mycomment가 변경되고 ture가 되었을때 삭제가된다. // 중
    // truen가 되기 위한 방법은 post.Comments.user.nickname == name 같다면 treu가 되어야한다. 
  const handleDelete =(name,myComment) => {
      console.log(name, myComment)
      if(!myComment){
        const newDelte2 = post.Comments.filter((commet) => commet.User.nickname !== name )
        setPost({
          ...post,
          Comments: newDelte2
        })
      }else{
        alert('작성자가 틀립니다.')
      }
  }
  
   //  const newDelte2 = post.Comments.find((delte) => delte.User.nickname === name )

    // if(newDelte2.User.nickname === name){
    //   newDelte2.myComment = true
    //   console.log(newDelte2.myComment)
    //   console.log(newDelte2)
    //   if (newDelte2.myComment) {
    //     const newDelte = post.Comments.filter((commit) => commit !== newDelte2);
    //     setPost((prevPost) => ({
    //       ...prevPost,
    //       Comments: newDelte,
    //     }));
    //     console.log(newDelte);
    //   }
    // }else{
    //   alert('작성자가 아닙니다.')
    // }






  //
  return (
    <S.Wrapper>
      <h1>문제2</h1>
      <S.PostBox>
        <S.PostTitle>제목: {post.title}</S.PostTitle>
        <S.PostContent>내용: {post.content}</S.PostContent>
      </S.PostBox>
      <S.PostInfo>
        <p>
          작성자: <span>{post.User.nickname}</span>
        </p>
        <p>
          작성자 나이: <span>{post.User.age}</span>
        </p>
        <p>
          작성자 키: <span>{post.User.height}</span>
        </p>
      </S.PostInfo>
      <div>
        <p>
          댓글 수: <span>{post.Comments.length}</span>
        </p>
        <input placeholder="작성자" name="name"  ref={userName}/>
        <input placeholder="댓글 내용"  name="content" ref={userContext}/>
        <button onClick={handleAdd}>댓글 작성</button>
      </div>
      <S.CommentList>
        {/* list */}
        {/* 예시 데이터 */}
        {post.Comments.map((items, index) => 
        <Comment key={index} 
                name={items.User.nickname} 
                content={items.content} 
                myComment = {items.myComment}
                onChangeContent ={handleContent}
                handleDelete={handleDelete}/> )} 
      </S.CommentList>
    </S.Wrapper>
  );
}
export default State2;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostBox = styled.div`
  background-color: #999;
  width: 360px;
  padding: 10px;
`;

const PostTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const PostContent = styled.p`
  color: #fff;
`;

const PostInfo = styled.div`
  width: 360px;
  border: 3px solid #f00;
  padding: 10px;
  margin: 10px;

  p {
    display: flex;
    justify-content: space-around;
  }

  span {
    font-weight: bold;
  }
`;

const CommentList = styled.ul`
  width: 960px;
`;

const S = {
  Wrapper,
  PostBox,
  PostTitle,
  PostContent,
  PostInfo,
  CommentList,
};
