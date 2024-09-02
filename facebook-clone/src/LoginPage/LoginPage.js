import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const [userNameTrying, setUserNameTrying] = useState('');
    const [passwordTrying, setpasswordTrying] = useState('');
    const [error, setError] = useState('');
    const [isItTrue, setIsItTrue] = useState(false);
    const userName = "abc@gmail.com";
    const password = "123";
    const navigate = useNavigate();

    const setIsItTrueCheck = () => {
        return new Promise((resolve) => {
            const isTrue = (userNameTrying === userName && password === passwordTrying);
            setIsItTrue(isTrue);
            resolve(isTrue);
        });
    }

    const ValidationCheck = async (e) => {
        setError('')
        e.preventDefault();
        let result = await setIsItTrueCheck();
        console.log(result);
        console.log(userNameTrying);
        console.log(passwordTrying);

        if (result) {
            navigate("/HomePage");
        } else {
            setUserNameTrying('')
            setpasswordTrying('')
            console.log("Error")
            setError('Incorrect username or password')
            navigate("/LoginPage");
        }
    }

    return (
        <div className="Login">
            <div className="facebook">
                <div className="facebooktext">facebook</div>
                <div className="title">
                    Connect with friends and the world
                    <br />around you on Facebook.
                </div>
            </div>
            <form>
                <div className="LoginContainer">
                    <div className="logindetails">
                        <input
                            type="email"
                            value={userNameTrying}
                            onChange={(e) => setUserNameTrying(e.target.value)}
                            placeholder="Email address or phone number"
                        />
                        <br/>
                        <input
                            type="password"
                            value={passwordTrying}
                            onChange={(e) => setpasswordTrying(e.target.value)}
                            placeholder="Password"
                        />
                        <br/>
                        {/*<Verification user={userNameTrying} pass={passwordTrying} bool={isItTrue} />*/}
                        <button className="btn" onClick={ValidationCheck}>Log in</button>
                    </div>
                    <p id="error" >{error}</p>
                    <div className="forget">
                        <a href="forget"> Forget Password</a>
                        <br/>
                        <button className="btns">Creating New Account</button>
                    </div>
                    <div></div>
                    <p></p>
                    <br/>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
