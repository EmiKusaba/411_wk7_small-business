import React from 'react'
import { Switch, Route, Redirect  } from 'react-router'
import LogIn from './components/LogIn'
import Listings from './containers/Listings'
import Details from './containers/Details'
import cookie from 'cookie'

// Write checkAuth function here
const checkAuth = () => {
  // Check cookie
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

// Write ProtectedRoute function here
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
      <Route
          {...rest}
          render={(props) => checkAuth()
              ? <Component {...props} />
              : <Redirect to="/login" />}
      />
  )
}

const Router = () => {
    return (
        <Switch>
            <Route path="/listings" component={Listings} />
            <Route path="/login" component={LogIn} />
            <Route path="/shop/:id" component={Details} />
          
        </Switch>
    );
};

export default Router;