/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalState } from '../../context/global.context';
import { singIn } from '../../actions/singIn';
import './LoginForm.scss';

export const LoginForm = () => {
    const [details, setDetails] = useState({name:'', email:'', password:''});
    const [error, setError] = useState("");
    const { setLogged, setCurrentUser } = useContext(GlobalState);
    const navigate = useNavigate();
    
    const login = details => {
        singIn({
            name: details.name,
            email: details.email,
            password: details.password
        })
        .then(data => {
            if(data.isValid) {
                setLogged(true)
                setCurrentUser({
                    name: data.user.name,
                    email: data.user.email
                });
                setLogged(true);
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            }else {
                setCurrentUser({
                    name: '',
                    email: ''
                });
                setError("details do not Match");
                setLogged(false);
                setDetails({name:'', email:'', password:''});
            };
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        login(details)
    }
    
    return (
        <form 
        className='form-inner' 
        onSubmit={handleSubmit}>
            <h2 className='form-inner__header-text'>Login</h2>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
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
            <p>Don&apos;t have an account yet? 
                <Link to="/login/signup" className="form-inner__buttons--link">Sing up!</Link>
            </p>
        </form>
    );
};
