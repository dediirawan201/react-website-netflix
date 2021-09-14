import React, { useRef, useState } from 'react'
import './register.scss';

const Register = () => {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    const emailRef = useRef();
    const handleStart = () => {
        setEmail(emailRef.current.value);
    }
    const passwordRef = useRef();
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">

                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            />
          <button className="loginButton">Sign In</button>
            </div>
            </div>
            <div className="container">
                <h1>unlimited movies, tv show, net tv, and more</h1>
                <h2>Watch anywhere. cancel anytime</h2>
                <p>ready to watch, enter your email dan gratis</p>
                {!email ? (
                <div className="input">
                    <input type="email" placeholder="email address" ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
                ) : (
                <div className="input">
                    <input type="password" placeholder="password" ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </div>
                )}
            </div>
        </div>
    )
}

export default Register
