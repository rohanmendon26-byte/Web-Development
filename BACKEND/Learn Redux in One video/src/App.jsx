//npm install @reduxjs/toolkit react-redux

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
     <Navbar/>
     <div className='center'>
      <button onClick={() => dispatch(decrement())}>-</button>
      Currently count is {count}
      <button onClick={()=>dispatch(increment())}>+</button>
     </div>
    </>
  )
}

export default App
