import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useGetUsers } from './useGetUsers';
import { AuthContext } from '../context/Auth.context';

export const useSignIn = userValidate => {
    const navigate = useNavigate();
    const { users } = useGetUsers();
    const { setIsLogged, setCurrentUser } = useContext(AuthContext);

    const admin = {
        name: 'admin',
        email: process.env.REACT_APP_USER_EMAIL,
        password: process.env.REACT_APP_USER_PASSWORD
    };

    useEffect(() => {
        if (userValidate.email === admin.email && userValidate.password === admin.password) {
            setIsLogged(true);
            setCurrentUser(admin);
            setTimeout(() => {
                navigate(-1)
            }, 1000);

        } else if(users) {
            const currentUser = users.find(user => user.email === userValidate.email && user.password === userValidate.password);
            if (currentUser) {
                setIsLogged(true);
                setCurrentUser(currentUser);
                setTimeout(() => {
                    navigate(-1)
                }, 1000);

            } else {
                setIsLogged(false);
                setCurrentUser({
                    name: '',
                    email: ''
                });
            }
       }
    }, [userValidate]);
}

useSignIn.default = {
    userValidate: {
        name: '',
        email: '',
        password: ''
    }
}

useSignIn.propTypes = {
    userValidate: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string
    })
}