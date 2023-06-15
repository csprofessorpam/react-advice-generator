import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Advice from './Advice/Advice';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Advice />
    </div>
  )
}

export default App
