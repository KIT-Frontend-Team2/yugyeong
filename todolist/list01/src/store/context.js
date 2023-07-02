import {  createContext, useState } from "react"
import init from "./store"



export const SomeContext = createContext()

const  Context = ({ children }) => {

  const [store, setStore] = useState(init);

  return(
  <SomeContext.Provider value={{store, setStore}}>
    {children}
  </SomeContext.Provider>
  )
}
export default Context



// createContext()에 init을 넣으면 컨텍스트 전체가 불러와진다
// useSate에 넣어야만..!! 
