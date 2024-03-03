import React, { createContext, useState } from 'react'
export const Users=createContext()

function MyContext({children}) {
const[users,setUsers]=useState([])

  return (
    <Users.Provider value={{users,setUsers}}>
      {children}
    </Users.Provider>
  )
}

export default MyContext
