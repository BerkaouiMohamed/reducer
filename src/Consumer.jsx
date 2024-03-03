import React, { useContext } from 'react'
import { Todos } from './TodosContext'
import { Users } from './MyContext';
import { Product } from './MyContext2';

function Consumer() {
 const {todos,setTodos}=useContext(Todos)
 const {users}=useContext(Users)
 const {products}=useContext(Product)

console.log(todos);
console.log(products);
console.log(users);
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default Consumer
