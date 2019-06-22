
import React from 'react';
import {connect} from 'react-redux';
//  import {pushState} from 'redux-router';
import { BrowserRouter, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom'


export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
          ///  this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps (nextProps) {
          //  this.checkAuth(nextProps.isAuthenticated);
        }

        checkAuth (isAuthenticated) {
            
            console.log('send error', isAuthenticated)

            // if (!isAuthenticated) {
            //     alert('sss')               
            //     //this.props.history.goBack()
            //     // let redirectAfterLogin = this.props.location.pathname;
            //     // this.props
            //     //     .dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
            // }
        }

        render () {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        token: typeof state.authReducers.result !== "undefined" ? state.authReducers.result.token : false,
        isAuthenticated: typeof state.authReducers.result !== "undefined" ? state.authReducers.result.boolean : false
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}

