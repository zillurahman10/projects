import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithEmailLink } from 'firebase/auth';
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

    const handleEmailPasswordLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user
                console.log(user);
            })
            .catch(error => {
                setError(error)
            })
    }

    return (
        <form onSubmit={handleEmailPasswordLogin}>
            <input onBlur={handleEmail} type="email" placeholder='Enter your email' />
            <br />
            <input onBlur={handlePassword} type="password" placeholder='Enter your password' />
            <br />
            <input onBlur={handleConfirmPassword} type="password" placeholder='Enter password again' />
            <br />
            <p>{error}</p>
            <p>New in Foodpanda?<Link to="/signup">Create an accaout</Link></p>
            <input type="submit" />
        </form>
    );
};

export default Login;