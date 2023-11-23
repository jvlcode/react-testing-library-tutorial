import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    function signInHandler() {
        setMessage("Loading...")
        if(email == 'logesh@jvlcode.com' && password == 'test@123') {
            setTimeout(() => {
                setMessage('Successfully Loggedin!')
            }, 3000)
           
        } else {
            setTimeout(() => {
                setMessage('Invalid credentials!')
            }, 3000)
        }
    }

    return <div>
        <h1>Login</h1>
        <input type="text"  placeholder="Email" onChange={(e) => setEmail(e.target.value) }  /><br/>
        <input type="password"  placeholder="Password" onChange={(e) => setPassword(e.target.value) }/><br/>
        <button onClick={signInHandler}>Signin</button>
        {message && <p>{message}</p>}
    </div>
}