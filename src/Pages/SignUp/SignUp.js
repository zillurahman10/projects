import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const auth = getAuth(app)

    const handleEmail = e => {
        setEmail(e.target.value)
    }


    const handlePassword = e => {
        setPassword(e.target.value)
    }


    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }

    const handleEmailPasswordSignUp = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user
                console.log(user);
            })
            .catch(error => {
                setError(error)
            })
    }

    return (
        <form onSubmit={handleEmailPasswordSignUp}>
            <input onBlur={handleEmail} type="email" placeholder='Enter your email' />
            <br />
            <input onBlur={handlePassword} type="password" placeholder='Enter your password' />
            <br />
            <input onBlur={handleConfirmPassword} type="password" placeholder='Enter password again' />
            <br />
            <p>Already have an account?<Link to="/login">Login</Link></p>
            <input type="submit" />
        </form>
    );
};

export default Login;