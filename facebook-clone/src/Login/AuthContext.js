import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// AuthContext
const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleLoginSuccess = () => {
        console.log('Login successful:');
        navigate("/HomePage");

    };

    const login = async (username, password) => {
        setIsLoading(true);
        setError(null);
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (username === 'u' && password === 'p') {
                        handleLoginSuccess();
                        resolve();
                    } else {
                        reject('Incorrect username or password');
                    }
                }, 1000);
            });
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{error, isLoading, login }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
