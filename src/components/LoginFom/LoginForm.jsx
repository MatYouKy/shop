/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.scss';

export const LoginForm = ({login, error}) => {
    const [details, setDetails] = useState({name:'', email:'', password:''})

    const handleSubmit = e => {
        e.preventDefault();
        login(details)
    }
    return (
        <form className='form-inner' onSubmit={handleSubmit}>
            <h2 className='form-inner__header-text'>Login</h2>
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
            <button type="submit" className="form-inner__button">Login</button>
        </form>
    );
};


LoginForm.propTypes = {
    login: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
}