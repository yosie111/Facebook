//In real use, the app has to ask the server for the real username and then verify it.
//To simulate the usage, I used the https://httpbin.org/post server.
//https://httpbin.org/post is a testing server designed to help developers test HTTP requests easily.
//It provides an API that responds with detailed information about the request it receives.
import React, { useState , useEffect} from "react";

function ApiPrac() {
    const [dataCorrect, setUserDataCorrectAPI] = useState({
        userNameCorrect: '',   // Default value for username
        passwordCorrect: '',
        loginAttempt: false,
    });
    useEffect(() => {
        if (dataCorrect.loginAttempt ===true) {
            console.log('the data state is updated');  // Logs data only after fetching is done
        }
    }, [dataCorrect.loginAttempt]);


    // Fetch data only once when the component mounts
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'  // Indicates the content type is JSON
                },
                body: JSON.stringify({
                    "userNameCorrect": "a",
                    "passwordCorrect": "b",
                    "loginAttempt": "true"
                })
            })
                .then((response) => response.json())  // Parses the response into a JSON object
                .then((jsonObject) => {
                    setUserDataCorrectAPI(JSON.parse(jsonObject.data));
                })
                .catch((error) => {
                    console.error('Error:', error);  // Handle any errors
                    reject(error);  // Reject the Promise in case of an error
                });
        });
    };



    // Handle button click
    const updateUserData = () => {
        fetchData();
        console.log('the data state is updated');  // Logs data only after fetching is done
    };

    return (
        <div>
            <p>Username: {dataCorrect.userNameCorrect}</p>
            <p>Password: {dataCorrect.passwordCorrect}</p>
            <button onClick={updateUserData}>Update User Data</button>
        </div>
    );
}

export default ApiPrac;
