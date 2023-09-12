import React, { Component } from "react";
import Signin from "./login/Signin.jsx";
import Login from "./login/Login.jsx";
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";



function App()  {
    return (
      <Router>

        <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        </Routes>

        </Router >
    );
}
export default App;