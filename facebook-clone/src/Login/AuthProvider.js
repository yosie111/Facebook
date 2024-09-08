import React, { useState, useEffect } from 'react';
import './AuthProvider.css';
import LoginComponent from './LoginComponent';  // Importing the component
import UserContext from './UserContext';  // Importing the context

function AuthProvider({ children }) {  // Receiving children as a parameter
    const [error, setError] = useState('');
    const [attemptedLogin, setAttemptedLogin] = useState(false);
    const [userAuthenticated, setUserAuthenticated] = useState(false);

    const [user, setUserDataTrying] = useState({
        userNameTrying: '',   // Default value for username
        passwordTrying: '',
        isTrueUser: false,
    });

    // Update error based on login attempt and if user is not verified
    useEffect(() => {
        if (attemptedLogin) {
            if (!user.isTrueUser) {
                CheckSetError(false);
            } else {
                setError('');
            }
        }
    }, [user, attemptedLogin]);

    // Function to update only the userNameTrying field
    const setUserNameTrying = (newUserName) => {
        setUserDataTrying((prevUser) => ({
            ...prevUser,
            userNameTrying: newUserName, // Update only userNameTrying
        }));
    };

    // Function to update only the passwordTrying field
    const setPasswordTrying = (newPassword) => {
        setUserDataTrying((prevUser) => ({
            ...prevUser,
            passwordTrying: newPassword, // Update only passwordTrying
        }));
    };

    // Object to manage the user's data and state
    const verificUser = {
        data: user,
        setIsItTrueCheck: (value) => {
            setAttemptedLogin(true);
            setUserDataTrying((prevUser) => ({
                ...prevUser,
                isTrueUser: value.isTrueUser,
                userNameTrying: '', // Clear username after login attempt
                passwordTrying: '', // Clear password after login attempt
            }));
            console.log('value.isTrueUser  :  '+value.isTrueUser);
            setUserAuthenticated(value.isTrueUser);
        },
    };

    // Function to set an error message if the user is not verified
    function CheckSetError(isFalse) {
        if (!isFalse) {
            setError('Incorrect username or password');
        } else {
            setError('');
        }
    }

    return (
        <UserContext.Provider value={{ userAuthenticated, verificUser }}>
            <div className="login-form">
                <input
                    type="text"
                    value={user.userNameTrying}
                    onChange={(e) => setUserNameTrying(e.target.value)}
                    placeholder="Email address or phone number"
                />
                <br />
                <input
                    type="password"
                    value={user.passwordTrying}
                    onChange={(e) => setPasswordTrying(e.target.value)}
                    placeholder="Password"
                />
                <br/>
            </div>
            <LoginComponent />
            {attemptedLogin && <p id="error">{error}</p>}
            {children}
        </UserContext.Provider>
    );
}

export default AuthProvider;
