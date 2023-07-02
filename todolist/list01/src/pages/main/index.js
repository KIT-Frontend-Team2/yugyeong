import styled  from "styled-components"
import Date from "./date/date"
import Input from "./input/input"
import TodoList from "./todo/todo-list"
import { padding } from "../../style/common"


const MaingPage = () => {


  return(
    <S.Wrapper>
      <S.Container>
        <div>
          <Date/>
        </div>
        <div>
          <Input/>
          <TodoList/>
        </div>
      </S.Container>
    </S.Wrapper>
  )
}
export default MaingPage

const Wrapper = styled.div`
  width: 30%;
  height: 600px;
  background-color: ${ ({theme}) => theme.Theme2.PALLETE.bg};
  opacity: 0.7;
  text-align: center;
  border-radius: 25px;
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.7);

`

const Container = styled.div`
  ${padding}
`

const S = {
  Wrapper,
  Container
}