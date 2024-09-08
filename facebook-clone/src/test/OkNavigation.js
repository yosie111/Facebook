import React, { useContext, useEffect } from 'react';
import UserContext from '../Login/UserContext';
import { useNavigate } from 'react-router-dom';


function OkNavigation() {
    const context = useContext(UserContext);
    const { userAuthenticated } = context || {};
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
        </div>
    );
}

export default OkNavigation;
