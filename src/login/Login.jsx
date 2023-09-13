import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [userid, setuserid] = useState("");
    const [userName, setuserName] = useState("");
    const [userPassword, setuserPassword] = useState("");
    const [birth, setbirth] = useState("")
    const [message, setMessage] = useState("");
    const [useridFromServer, setUseridFromServer] = useState("");

    useEffect(() => {
        fetch("/users/userid")
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
                setUseridFromServer(data);
            });
    }, []);
    const navigateToSiginin = () => {
        if (userid === useridFromServer.toString()) {
            navigate("/signin");
        } else {
            console.log("userid:", userid);
            console.log("useridFromServer:", useridFromServer);
            setMessage("User ID does not match")
        }
    };
  
    return (

        <div>
            <h1>login!</h1>
            <input type="text" name="userid" value={userid} onChange={(e) => setuserid(e.target.value)} /><br />
            <input type="text" name="userName" value={userName} onChange={(e) => setuserName(e.target.value)} /> <br />
            <input type="text" name="userName" value={userPassword} onChange={(e) => setuserPassword(e.target.value)} /> <br />
            <input type="text" name="birth" value={birth} onChange={(e) => setbirth(e.target.value)} /> <br />
         
            <button onClick={navigateToSiginin}>click</button>
            <p>success: {message}</p>
        </div>

    );
};

export default Login;
