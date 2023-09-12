import React from 'react';
import { useEffect, useState } from "react";


function Signin() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/users")
            .then(response => response.text())
            .then(message => {
                setMessage(message)
            }); 
            }, [])
    return (
        <h1>로그인 성공</h1>


    );
}

export default Signin;