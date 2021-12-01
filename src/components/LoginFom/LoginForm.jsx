/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignIn } from '../../actions/useSignIn';
import './LoginForm.scss';

export const LoginForm = () => {
    const [details, setDetails] = useState({name:'', email:'', password:''});
    const [checkUser, setCheckUser] = useState({name:'', email:'', password:''})
    const [error, setError] = useState("");

    useSignIn(checkUser);
    
    const checkLogin = details => {
        setCheckUser(details)
        setDetails({name:'', email:'', password:''});
        setError("details do not Match");
    };

    const handleSubmit = event => {
        event.preventDefault();
        checkLogin(details)
    }
    
    return (
        <form 
            className='form-inner' 
            onSubmit={handleSubmit}>
            <h2 className='form-inner__header-text'>Login</h2>
            <p className="error">{error}</p>
            <div className="form-inner__group">
                <label 
                    htmlFor="userEmail" 
                    className="form-inner__group--label">
                    User e-mail
                </label>
                <input 
                    type="email" 
                    id="userEmail"
                    name="email"
                    className="form-inner__group--input"
                    onChange={event => setDetails({...details, email: event.target.value})}
                    onClick = {() => setError('')}
                    value={details.email}
                />
            </div>
             <div className="form-inner__group">
                <label 
                    htmlFor="userPassword" 
                    className="form-inner__group--label">
                    password
                </label>
                <input 
                    type="password" 
                    id="userPassword" 
                    className="form-inner__group--input"
                    onChange={event => setDetails({...details, password: event.target.value})}
                    onClick = {() => setError('')}
                    value={details.password}
                />
            </div>
            <button type="submit" className="form-inner__buttons--button">Login</button>
            <p className='form-info'>Don&apos;t have an account yet? 
                <Link to="/login/signup" className="form-inner__buttons--link">Sing up!</Link>
            </p>
        </form>
    );
};
