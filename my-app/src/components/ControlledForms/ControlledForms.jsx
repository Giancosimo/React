import React, { useState } from 'react';

function Welcome({ name }) {
    return <p>Welcome, {name}!</p>;
}

function InteractiveWelcome() {
    const [name, setName] = useState('');

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter your name"
            />
            <Welcome name={name} />
        </div>
    );
}
function Welcome({ name }) {
    return <p>Welcome, {name}!</p>;
}

// InteractiveWelcome component
function InteractiveWelcome() {
    const [name, setName] = useState('');

    // Event handler to update the input value
    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter your name"
            />
            <Welcome name={name} />
        </div>
    );
}

function Login({ onLogin }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);


    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleRememberChange = (event) => setRemember(event.target.checked);


    const handleLogin = (event) => {
        event.preventDefault();
        onLogin({ username, password, remember });
    };


    const handleReset = () => {
        setUsername('');
        setPassword('');
        setRemember(false);
    };


    const isLoginDisabled = !username || !password;

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter your username"
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                </label>
            </div>
            <div>
                <label>
                    Remember me:
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={handleRememberChange}
                    />
                </label>
            </div>
            <div>
                <button type="submit" disabled={isLoginDisabled}>Login</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </div>
        </form>
    );
}

export default Login;
export default InteractiveWelcome;