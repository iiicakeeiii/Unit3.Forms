import {useState} from 'react';


const SignUpForm = ({setToken, API_URL}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           const resp = await fetch(API_URL,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    })

                });

           const res = await resp.json();
           setToken(res.token)

        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <h2 className="text-amber-200">Sign Up</h2>
            {error && <p>{error}</p>}
            <form className="flex flex-col gap-2 text-amber-200" onSubmit={handleSubmit}>
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