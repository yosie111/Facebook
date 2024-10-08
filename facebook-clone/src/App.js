import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // החלף Switch ו-Redirect
import './App.css';
import LoginPage from "./LoginPage/LoginPage";
import HeaderArea from "./HeaderArea/HeaderArea";
import HomePage from "./HomePage/HomePage";
import ApiPrac from "./Login/ApiPrac"
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/ApiPrac" element={<ApiPrac />} />
                    <Route path="/LoginPage" element={<LoginPage />} />
                    <Route path="/HeaderArea" element={<HeaderArea />} />
                    <Route path="/HomePage" element={ <HomePage /> } />
                    <Route path="/" element={<LoginPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
