import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Test from "../test/Test";

function LoginPage() {
    const [userNameTrying, setUserNameTrying] = useState('');
    const [passwordTrying, setpasswordTrying] = useState('');
    const [error, setError] = useState('');
    const [isItTrue, setIsItTrue] = useState(false);
    const userName = "abc@gmail.com";
    const password = "123";
    const navigate = useNavigate();




    return (
        <div className="Login">
            <div className="facebook">
                <div className="facebooktext">facebook</div>
                <div className="title">
                    Connect with friends and the world
                    <br />around you on Facebook.
                </div>
            </div>
            <div className="LoginContainer">
                <Test/>
                <form>
                    <div className="forget">
                        <a href="forget"> Forget Password</a>
                        <br/>
                        <button className="btns">Creating New Account</button>
                    </div>
                </form>
                    <div></div>
                    <p></p>
                    <br/>
            </div>
        </div>
    );
}

export default LoginPage;
