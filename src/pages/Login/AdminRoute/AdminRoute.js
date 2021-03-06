import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import loader from '../../../images/loader.gif'

const AdminRoute = ({ children, ...rest }) => {
    const { user,admin, isLoading } = useAuth();

    if (isLoading) {
        return <img src={loader} alt="" />
    }
    


    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;