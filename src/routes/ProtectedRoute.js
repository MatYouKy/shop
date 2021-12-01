import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router'
import { AuthContext } from '../context/Auth.context'

export const ProtectedRoute = ({path, element}) => {
    const user = useContext(AuthContext)
    if (user) {
        return <Route key={path} path={path} element={element} />
    }
    return "string"
}


ProtectedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    element: PropTypes.func.isRequired
}