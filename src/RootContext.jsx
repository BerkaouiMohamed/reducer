import React from 'react'
import MyContext from './MyContext'
import MyContext2 from './MyContext2'

function RootContext({children}) {
  return (
   <MyContext>
    <MyContext2>

        {children}
    </MyContext2>
   </MyContext>
  )
}

export default RootContext
