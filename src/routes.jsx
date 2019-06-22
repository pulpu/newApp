import React from 'react'
import { BrowserRouter, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom'
import App from './App'
import FormContainer from './components/FormContainer'
import login from './components/login'
import PrivateRoute from './privateRoute'
import { requireAuthentication } from './components/AuthenticatedComponent'

//this.state.authed
const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/login" component={login} />
            <Route exact path="/form" component={requireAuthentication(FormContainer)}/> 
        </Switch>
    </App> )

export default Routes