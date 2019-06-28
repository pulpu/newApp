import logo from './logo.svg';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction }  from './actions/simpleAction';
import { Link } from 'react-router-dom'


/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})


/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {console.log(this.props)}
        <pre>
          {
            // JSON.stringify(this.props.reducer)
            JSON.stringify(this.props.authReducers)
          }
        </pre>
        <div>
            {this.props.children}
          </div>
        <button onClick={this.props.simpleAction}>Test redux action</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link className="btn btn-primary" to={{
                                    pathname: '/login',
                                    state: { userId: 'gigi' }
                                    }}> Edit info </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);