import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';
import { LoginForm } from '../../components/LoginFom/LoginForm';
import './Login.scss';

export const Login = () => {
    const url = 'https://reqres.in/api/users';
    const admin = {
        email: `${process.env.REACT_APP_USER_EMAIL}`,
        password: `${process.env.REACT_APP_USER_PASSWORD}`
    };
    const [error, setError] = useState("");
    const [user, setUser] = useState({name:"", email:""});

    const Login = details => {
        if(details.email === admin.email && details.password === admin.password) {
            setUser({
                name: details.name,
                email: details.email
            })
        }else {
            setError("details do not Match");
        }
    }

    const Logout = () => {
        setUser({name:"", email:""})
    }

    useEffect(() => {
        const getAxios = async (URL) => {
            axios.get(URL)
            .then(res => console.log(res.data))
        }
        getAxios(url)
    })


    return (
        <section className="login-section">
            {(user.email !== "") 
            ? ( <div>
                    <h1>Witaj, <span>{user.name}</span></h1>
                    <button 
                        className="login-section__button"
                        type="submit"
                        onClick={Logout}
                        onKeyPress={Logout}
                        >Logout
                    </button>
                </div>) 
            : <LoginForm login={Login} error={error} />}
        </section>
    );
}