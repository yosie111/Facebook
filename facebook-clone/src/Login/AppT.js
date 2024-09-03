import React from 'react';
import { AuthProvider } from './AuthContext';
import LoginComponent from './LoginComponent';

function AppT() {
    return (
        <AuthProvider>
            <LoginComponent />
        </AuthProvider>
    );
}

export default AppT;
