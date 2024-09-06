import React from 'react';
import AuthProvider from '../Login/AuthProvider';  // עוטף את כל הקומפוננטות
import OkNavigation from './OkNavigation';

function Test() {
    return (
        <AuthProvider>
            <OkNavigation/>
        </AuthProvider>

    );
}

export default Test;
