import { useContext } from "react"
import { SomeContext } from "../../../store/context"
import OneTodo from "./one-todo"





const TodoList = () => {

  const {store,setStore} = useContext(SomeContext)


  const handleDelte = (id) => {
    const DelteList = store.filter((items) => items.id !== id)
    console.log(`델리트 목록`, DelteList)
    setStore(DelteList)  // [] 배열안에 넣으면 배열안에 배열형태로 들어가서 리셋된다. 
}

  const handleUpdate = (id, contents) => {
    const _newContent = store.find((itmes) => itmes.id === id)
    _newContent.contents = contents
  }
  console.log(store)

  return(
    <div>
      {store.map((items,index) => <OneTodo key={index} store={items} handleDelte={handleDelte} id ={items.id} handleUpdate={handleUpdate}/>)}
    </div>
  )
}

export default TodoList

