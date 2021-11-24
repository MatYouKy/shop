import PropTypes from 'prop-types';

export const singIn = valid => {
    const admin = {
        name: 'admin',
        email: process.env.REACT_APP_USER_EMAIL,
        password: process.env.REACT_APP_USER_PASSWORD
    };

    return fetch(`${process.env.PUBLIC_URL}/users.json`)
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error
    })
    .then(data => {
        let current;
        if(valid.email === admin.email && valid.password === admin.password) {
            current = {
                user:{ name: admin.name, email: admin.name},
                isValid: true
            }
            return current
        }

        const user = data.find(it => it.email === valid.email && it.password === valid.password);
        if(user) {
            current = {
                user,
                isValid: true
            }
            return current
        } 
        current = {
            user: {
                name: '',
                email: ''
            },
            isValid: false
        }
        return current;

    })
    // eslint-disable-next-line no-console
    .catch(err => console.log('Error singIn', err))
}

singIn.default = {
    valid: {
        name: '',
        email: '',
        password: ''
    }
}

singIn.propTypes = {
    valid: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string
    })
}