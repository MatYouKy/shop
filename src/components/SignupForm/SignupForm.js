/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../LoginFom/LoginForm.scss';

export const SignupForm = () => {
    const [details, setDetails] = useState({name:'', email:'', password:''})
    const [error, setError] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault();
        setError("details do not Match");        
    }
    
    return (
        <form className='form-inner' onSubmit={handleSubmit}>
            <h2 className='form-inner__header-text'>sign up</h2>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-inner__group">
                <label htmlFor="first_name" className="form-inner__group--label">User Name</label>
                <input 
                    type="first_name" 
                    id="first_name"
                    name="first_name"
                    className="form-inner__group--input"
                    onChange={e => setDetails({...details, name: e.target.value})}
                    value={details.name}
                />
            </div>
            <div className="form-inner__group">
                <label htmlFor="userEmail" className="form-inner__group--label">User e-mail</label>
                <input 
                    type="email" 
                    id="userEmail"
                    name="email"
                    className="form-inner__group--input"
                    onChange={e => setDetails({...details, email: e.target.value})}
                    value={details.email}
                />
            </div>
             <div className="form-inner__group">
                <label 
                    htmlFor="userPassword" 
                    className="form-inner__group--label">password</label>
                <input 
                    type="password" 
                    id="userPassword" 
                    className="form-inner__group--input"
                    onChange={e => setDetails({...details, password: e.target.value})}
                    value={details.password}
                />
            </div>
             <div className="form-inner__group">
                <label 
                    htmlFor="confirmUserPassword" 
                    className="form-inner__group--label">confirm password</label>
                <input 
                    type="password" 
                    id="confirmUserPassword" 
                    className="form-inner__group--input"
                    onChange={e => setDetails({...details, confirmPassword: e.target.value})}
                    value={details.confirmPassword}
                />
            </div>
            <button type="submit" className="form-inner__buttons--button">sign up</button>
            <p>Do you have an account? <Link to="/login/signin" className="form-inner__buttons--link">Sing in!</Link></p>
        </form>
    );
};
