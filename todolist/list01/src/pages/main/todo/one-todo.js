import { useRef, useState } from "react"
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const OneTodo = ({store,handleDelte,id,handleUpdate}) => {
  const [isBoolean, setIsBoolean] = useState(false)
  const updateContent = useRef(store.contents);


  const changeClick = () => {
    if(!isBoolean) return setIsBoolean(true)
    const contents = updateContent.current.value
    handleUpdate(id, contents)
    setIsBoolean(false) 
  }


  return(
    <form>
      <Checkbox {...label} size="medium" />
      {store.title}
      {isBoolean ? <textarea placeholder="수정할 내용을 작성하세요" ref={updateContent}></textarea> : store.contents}
      <IconButton aria-label="Update" size="medium" onClick={() => changeClick(id)}>
        <CreateIcon fontSize="medium" />
      </IconButton>
        {/* <button variant="outlined"onClick={() => changeClick(id)} >수정</button>   */}
      <IconButton aria-label="delete" size="medium" onClick={() => {handleDelte(id)}}>
        <DeleteIcon fontSize="medium" />
      </IconButton>
        {/* <Button variant="outlined" onClick={() => {handleDelte(id)}}>삭제</Button> */}
    </form>
  )
}

export default OneTodo



//Cannot read properties of undefined (reading 'id')