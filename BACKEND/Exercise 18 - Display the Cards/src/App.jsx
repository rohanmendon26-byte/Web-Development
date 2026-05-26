import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await a.json();
    setCards(data)
    console.log(data)
}

useEffect(() => {
 fetchData()
}, [])


  return (
    <>
        <Navbar />
      <div class="container">
        {cards.map((card)=>{
          return <div key={card.id} class="card">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By:UserId:{card.userId} and </span>
          </div>
        })}
      </div>
    </>
  )
}

export default App
