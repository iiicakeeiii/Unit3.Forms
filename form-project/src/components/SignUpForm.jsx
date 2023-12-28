import {useState} from 'react';


const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("here")
    }

    return (
        <>
            <h2 className="text-amber-200">Sign Up</h2>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input className="mx-1 border-2" value={username} onChange={
                        (e) => {
                            setUsername(e.target.value)
                        }
                    }/>
                </label>

                <label>
                    Password:
                    <input className="mx-1 border-2" value={password} onChange={
                        (e) => {
                            setPassword(e.target.value)
                        }
                    }/>
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default SignUpForm;