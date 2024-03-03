import React, { useRef, useState } from 'react'

function App() {
  const [todos,setTodos]=useState([])
  const referance=useRef()

  const addToDo=(a)=>{
    setTodos([...todos,{title:a,done:false}])
  }
  const deleteTodo=todo=>setTodos(todos.filter((element)=>element.title!=todo.title))
  const editTodo=todo=>setTodos(todos.map((element)=>element.title==todo.title?{...element,done:!element.done }:element))

  console.log(todos);
  return (
    <><div>
      <input type='text' ref={referance} />
      <button onClick={()=>addToDo(referance.current.value)} >add</button>
    </div>
    
    <div>



    </div>
    </>
  )
}

export default App
