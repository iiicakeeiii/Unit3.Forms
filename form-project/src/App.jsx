import { useState } from 'react'
import SignUp from './components/SignUp.jsx'
import Authentication from "./components/Authentication.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	    <SignUp />
        <Authentication />
    </>
  )
}

export default App
