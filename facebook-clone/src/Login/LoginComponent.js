import React, { useContext, useState, useEffect } from 'react';
import UserContext from './UserContext';

function LoginComponent() {
    const { verificUser } = useContext(UserContext);
    const { data, setIsItTrueCheck } = verificUser;

    const [dataCorrect, setUserDataCorrectAPI] = useState({
        userNameCorrect: '',   // Default value for username
        passwordCorrect: '',
        loginAttempt: false,
    });

    function resolveFun(resolve) {
        resolve(dataCorrect.isTrueUser);
    }

    useEffect(() => {
        let myPromise = new Promise((resolve, reject) => {
            if (dataCorrect.loginAttempt === true) {
                console.log('the data state is updated');  // Logs data only after fetching is done
                resolveFun(resolve);
            }
        });
    }, [dataCorrect.isTrueUser]); // תלויות נכונות כדי להימנע מרינדור בלתי פוסק

    function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                setUserDataCorrectAPI({
                    userNameCorrect: 'd',   // Default value for username
                    passwordCorrect: 'd',
                    loginAttempt: true,
                });
                resolve('Data fetched');
            }, 3000);
        });
    }

    useEffect(() => {
        fetchData();//Run fetchData once when the component is loaded to get a username and password
                    // from the server
    }, []);

    async function clickHandler() {
        let result = await fetchData();
        console.log(result);
        const correct = data.userNameTrying === dataCorrect.userNameCorrect &&
            data.passwordTrying === dataCorrect.passwordCorrect &&  dataCorrect.loginAttempt ;
        setIsItTrueCheck({ isTrueUser: correct});
        console.log('LoginComponent isTrueUser: ' + correct);
        console.log(dataCorrect);
    }

    return (
        <div>
            <button className="btn" onClick={clickHandler}>Login</button>
        </div>
    );
}

export default LoginComponent;
