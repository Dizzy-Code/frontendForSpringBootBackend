import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/api/greet')
      .then(res => res.text()) // da dein Backend String zurückgibt
      .then(data => setGreeting(data))
      .catch(err => console.error('Error fetching greeting:', err))
  }, [])

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
}

