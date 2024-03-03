import React, { createContext, useState } from 'react'
export const Product=createContext()

function MyContext2({children}) {
const[products,setProducts]=useState([{product:'keybord'}])

  return (
    <Product.Provider value={{products,setProducts}}>
      {children}
    </Product.Provider>
  )
}

export default MyContext2
