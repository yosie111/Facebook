import React, { useContext } from 'react';
import UserContext from './UserContext';

function LoginComponent() {
    const { verificUser } = useContext(UserContext);
    const { data, setIsItTrueCheck } = verificUser;

    const userPassCorrect = {
        userNameCorrect: 'a',
        passwordCorrect: 'b',
    };

    function clickHandler() {
        const correct = data.userNameTrying === userPassCorrect.userNameCorrect &&
            data.passwordTrying === userPassCorrect.passwordCorrect;

        setIsItTrueCheck({ isTrueUser: correct });
        console.log('LoginComponent isTrueUser: ' + correct);
    }

    return (
        <div>
            <button className="btn" onClick={clickHandler}>Login</button>
        </div>
    );
}

export default LoginComponent;
