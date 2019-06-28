
import React from 'react';
import {connect} from 'react-redux';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            if (this.props.isAuthenticated === false) return this.props.history.push('/login');
          ///  this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps (nextProps) {
          //  this.checkAuth(nextProps.isAuthenticated);
        }

        render () {
            return (
                <div>
                    {this.props.isAuthenticated === true
                    ? <Component {...this.props} />
                    : null}
                </div>
            )
        }
    }

    const mapStateToProps = (state) => ({
        token: typeof state.authReducers.result !== "undefined" ? state.authReducers.result.token : false,
        isAuthenticated: typeof state.authReducers.result !== "undefined" ? true : false
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}

