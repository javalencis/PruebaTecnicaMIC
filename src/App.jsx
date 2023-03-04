import { useState } from 'react'
import { Header } from './components/Header'
import { SideLeftNav } from './components/SideLeftNav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <SideLeftNav/>
    </>
  )
}

export default App
