import React from 'react'
import { Switch, Route } from 'react-router'
// import LogIn from './containers/LogIn'
import Listings from './containers/Listings'


const Router = () => {
    return (
        <Switch>
            <Route path="/listings" component={Listings} />
            {/* <Route path="/login" component={LogIn} /> */}
          
        </Switch>
    );
};

export default Router;