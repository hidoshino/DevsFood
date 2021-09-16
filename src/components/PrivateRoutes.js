import React from "react";
import { Route, useHistory } from "react-router";
import { useSelector } from 'react-redux';

export default ( { children, ...rest } ) => {
    const history = useHistory();
    const token = useSelector(state => state.user.token);

    if(token === undefined){
        history.push('/login');
        return null;
    }
    
    return <Route {...rest}>{children}</Route>
}
