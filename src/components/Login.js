import { useState } from "react"
import { Link } from "react-router-dom"
import "./login.css"

const Login = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    return(
        <div className="login">
            <Link to="/home">
                <img 
                    className="login-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"    
                />
            </Link>

            <div className="login-container">
                <h1>Sign-In</h1>
                <form>
                    <label>E-mail</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    
                    <label>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" className="login-submit">Sign In</button>

                </form>
            </div>
        </div>
    )
}

export default Login