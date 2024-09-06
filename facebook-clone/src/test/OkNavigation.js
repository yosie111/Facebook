import React, { useContext, useEffect } from 'react';
import UserContext from '../Login/UserContext';
import { useNavigate } from 'react-router-dom';


function OkNavigation() {
    const context = useContext(UserContext);  // גישה לקונטקסט
    const { userAuthenticated } = context || {};  // בדיקה אם יש ערך לקונטקסט
    const navigate = useNavigate();


    function fY() {
        navigate("/HomePage")
        console.log('The user is authenticated');
    }

    function fN() {

    }

// Using useEffect to call the functions only when userAuthenticated changes
    useEffect(() => {
        if (userAuthenticated) {
            fY();
        } else {
            fN();
        }
    }, [userAuthenticated]);

    return (
        <div>
            <h1>Test Component</h1>
            <p>{userAuthenticated ? 'User is authenticated' : 'User is not authenticated'}</p>
        </div>
    );
}

export default OkNavigation;
