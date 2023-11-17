import "../../styles/Login.scss"
import React, { useState } from 'react';
const Login = ({ onLogin, error }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmitlogin = (e) => {
        e.preventDefault();
        const checklogin = { username, password }
        onLogin(checklogin);
        setUsername('');
        setPassword('');
    }
    const showpassword = () => {
        const show = document.getElementById("InputPass");
        if (show.type === "password") {
            show.type = "text";
        } else {
            show.type = "password";
        }
    }

    return (
        <div className="box">
            <h1>
                Login Page
            </h1>
            <div>
                <form onSubmit={handleSubmitlogin} >
                    <div className="ipt-username">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Username" />
                    </div>
                    <div className="ipt-password">
                        <input type="password" id="InputPass" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
                    </div>
                    <div className="show-pass" onClick={showpassword} >
                        <input type="checkbox" />Show Password
                    </div>
                    {error && <div className="text-error"><p>{error}</p></div>}
                    <div className="btn-login"><button>Login</button></div>
                </form>
            </div>
        </div>
    )
}
export default Login;