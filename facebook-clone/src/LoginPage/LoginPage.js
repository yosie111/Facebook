import React, { useState } from 'react';
import './LoginPage.css';
import Test from "../test/Test";

function LoginPage() {


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
