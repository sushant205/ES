import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const ProtectedRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} component={(props) => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            return <Component {...props} />
        } else {
            return <Redirect to={'/org_login'} />
        }
    }} />
}

export default ProtectedRoute;

