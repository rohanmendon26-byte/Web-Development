import { useEffect } from "react"
import React from 'react'



const Navbar = ({color}) => {
 // Case 1:Runs on every render
  useEffect(() => {
    alert("Hey i will run on every render")
  })
  // Case 2:Run only on First render
  useEffect(() => {
    alert("Hey welcome to my page, This is my firt render")
  }, [])

  // Case 3:Run only when certain values change
  useEffect(() => {
    alert("Hey i am running because color was changed")
  }, [color])
  
  return (
    <div>
      I am a Navbar {color} hehe
    </div>
  )
}

export default Navbar
