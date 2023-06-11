import { useSelector } from "react-redux"

const OneUser =  ({item}) => {

  const {title, content} = item


  return(
    <div>
      {title}
      {content}
      <button>삭제</button>
    </div>
  )
}

export default OneUser