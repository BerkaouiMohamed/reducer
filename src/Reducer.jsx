import React, { useReducer, useRef } from 'react'


const reducerFunction=(state,action)=>{
switch(action.type){

       case"ADD": return [...state,{title:action.payload,done:false}]
       case "DELETE": return state.filter((element)=>element.title!=action.payload.title)
       case "EDIT": return state.map((element)=>element.title==action.payload.title?{...element,done:!element.done }:element)

       default:return state

    }
  

}

function Reducer() {

    const referance=useRef()
    const addAction=(param)=>{return {type:"add",payload:param}}

const [todos,dispatch]=useReducer(reducerFunction,[])
    console.log(todos);
  return (
    <div>
        <div>
      <input type='text' ref={referance} />
      <button onClick={()=>dispatch(addAction(referance.current.value))} >add</button>
    </div>
      
      <div>

      {todos.length?<>
<h1>todos:</h1>
{todos.map((todo)=>{return<>

<h2> {todo.title} </h2>
<button onClick={()=>dispatch({type:"DELETE",payload:todo})}>delete</button>
<button onClick={()=>dispatch({type:"EDIT",payload:todo})}>edit</button>


</>})}
</>:null}


      </div>
    </div>
  )
}

export default Reducer
