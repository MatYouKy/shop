import PropTypes from 'prop-types';
import { getUsers } from './api/getUsers';

export const getCheckLogin = ({name, email, password}) => {   
    const admin = {
        name: 'admin',
        email: process.env.REACT_APP_USER_EMAIL,
        password: process.env.REACT_APP_USER_PASSWORD
    };
    if(email === admin.email && password === admin.password) {
        return {
            name,
            email
        }
    } 
    return getUsers().then(data => data.find(item => item.email === email)
    );
}

getCheckLogin.default = {
    name: '',
    email: '',
    password: ''
}

getCheckLogin.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
}
