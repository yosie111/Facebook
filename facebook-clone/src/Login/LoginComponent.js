import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import  './LoginComponent.css'

function LoginComponent() {
    const {error, isLoading, login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        login(username, password);
    };

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email address or phone number"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button  className="btn" onClick={handleLogin} disabled={isLoading}>
                {isLoading ? 'Log in...' : 'Log in'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default LoginComponent;
