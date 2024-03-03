import React, { createContext, useState } from 'react'
import Consumer from './Consumer'
import MyContext from './MyContext'
import MyContext2 from './MyContext2'
import RootContext from './RootContext'

export const Todos=createContext()

function TodosContext() {
    const[todos,setTodos]=useState([{title:"newtodo",done:false}])
   

  return (
    <Todos.Provider value={{todos,setTodos}}>
<RootContext>
        
        <Consumer />
       </RootContext>
    </Todos.Provider>
  )
}

export default TodosContext

