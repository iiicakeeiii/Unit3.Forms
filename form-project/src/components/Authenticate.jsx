const Authenticate = ({token, API_URL}) => {
    return (
        <>
            <div className="flex flex-col text-blue-300">
                Authenticate
                <button onClick={async () => {
                    const response = await fetch(API_URL);
                    const res = await response.json();
                }}>
                    Authenticate Token
                </button>
            </div>

        </>
    )
}

export default Authenticate