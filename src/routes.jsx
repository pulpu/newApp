import React from 'react'
import { BrowserRouter, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom'
import App from './App'
import FormContainer from './components/FormContainer'
import login from './components/login'
import { requireAuthentication } from './components/AuthenticatedComponent'
import UsersListingComponent from './components/UsersListingComponent'
import UserDetailsComponent from './components/UserDetailsComponent'

//this.state.authed
const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={login} />
            <Route  path="/listing" component={requireAuthentication(UsersListingComponent)}/> 
            <Route  path="/user" component={requireAuthentication(UserDetailsComponent)}/> 
        </Switch>
    </App> )

export default Routes