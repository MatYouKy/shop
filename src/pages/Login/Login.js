import React, { useContext, useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { GlobalState } from '../../context/global.context';
import { LoginForm } from '../../components/LoginFom/LoginForm';
import './Login.scss';

export const Login = () => {
    const navigate = useNavigate()
    const { currentUser, setLogged, setCurrentUser } = useContext(GlobalState)
    // const url = 'https://reqres.in/api/users';
    const admin = {
        name: 'admin',
        email: process.env.REACT_APP_USER_EMAIL,
        password: process.env.REACT_APP_USER_PASSWORD
    };

    const [error, setError] = useState("");

    const Login = details => {
        if(details.email === admin.email && details.password === admin.password) {
            setCurrentUser({
                name: details.name,
                email: details.email
            })
            setLogged(true)
            setTimeout(() => {
                navigate('/')
            }, 1000)


        }else {
            setError("details do not Match");
            setLogged(false)
        }
    }

    return (
        <section id="login-section"className="login-section">
            {(currentUser.email !== "") 
            ? ( <div>
                    <h1>Hello, <span>{currentUser.name ? currentUser.name : 'User'}</span>!</h1>
                </div>) 
            : <LoginForm login={Login} error={error} />}
        </section>
    );
}