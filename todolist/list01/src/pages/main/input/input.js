import { useContext, useState } from "react";
import { SomeContext } from "../../../store/context";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";
import { flexBetween } from "../../../style/common";



const Input = () => {

  const { store, setStore} = useContext(SomeContext)
  const [text, setText] = useState(store)  // input초기화를 모르겠네.... 

  const submit = (e) => {
    e.preventDefault()
    const title = e.target.title.value;
    const contents = e.target.content.value; 
    const newList = {
      id: Math.random(),
      title,
      contents,
      state: false
    }
    setStore(
      [...store, newList]
    )
    setText('')
  }

  return(
    <Box2 onSubmit={submit}
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
      <TextField id="filled-basic" label="Filled" variant="filled"name="title" value={text.titles} />
      <TextField id="filled-basic" label="Filled" variant="filled"name="content" value={text.contents} />
      {/* <input placeholder="제목을 입력하세요" type="text" name="title" value={text.titles}></input>
      <input placeholder="할일을 입력하세요" type="text" name="content" value={text.contents}></input> */}
      <Button type="submit"> add </Button>
    </Box2>
  )
}

export default Input


const Box2 = styled(Box)`
  ${flexBetween}
`