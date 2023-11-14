import "../../style/Login.scss"
import React, { useState } from 'react';
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmitlogin = (e) => {
        e.preventDefault();
        const checklogin = { username, password }
        onLogin(checklogin);
        setUsername('');
        setPassword('');
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
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
                    </div>
                    <div className="btn-login"><button>Login</button></div>
                </form>
            </div>
        </div>
    )
}
export default Login;