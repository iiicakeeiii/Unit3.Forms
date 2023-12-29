import {useState} from "react";

const Authenticate = ({token, API_URL}) => {
    const AUTH_URL = `${API_URL}/authenticate`
    const [successMessage, setSuccessMessage] = useState(null);

    const handleClick = async () => {
        try {
            const resp = await fetch(AUTH_URL,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const res = await resp.json();
            // setSuccessMessage(res.message);
            console.log(res)
        } catch (e) {
            console.error(e.message);
        }
    }
    return (
        <>
            <div className="flex flex-col text-blue-300">
                Authenticate
                <button onClick={handleClick}>
                    Authenticate Token
                </button>

                <span>{successMessage}</span>
            </div>

        </>
    )
}

export default Authenticate