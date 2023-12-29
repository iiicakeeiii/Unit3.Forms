import { useState } from 'react'
import SignUpForm from "./components/SignUpForm.jsx";
import Authenticate from "./components/Authenticate.jsx";
import './App.css'

function App() {
    const [token, setToken] = useState(null);
    const API_URL = `https://fsa-jwt-practice.herokuapp.com`;

    return (
        <>
            <div className="flex flex-col gap-10">
                <span className="border-8" >
                    <SignUpForm  setToken={setToken} API_URL={API_URL} />
                </span>
                <span className={"border-8"}>
                    <Authenticate token={token} API_URL={API_URL}/>
                </span>
            </div>
        </>
    )
}

export default App
