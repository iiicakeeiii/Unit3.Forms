import { useState } from 'react'
import SignUpForm from "./components/SignUpForm.jsx";
import Authenticate from "./components/Authenticate.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	    <SignUpForm />
        <Authenticate />
    </>
  )
}

export default App
