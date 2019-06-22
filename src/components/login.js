import React, { Component } from 'react';
import Input from '../formComponents/Input';  
import {loginUserSuccess, loginUserFailure} from '../actions/auth';
import { connect } from 'react-redux';


/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = (dispatch) =>{
  return({
    loginUserSuccess: (token) => {dispatch(loginUserSuccess(token))},
    loginUserFailure: (err) => {dispatch(loginUserFailure(err))}
  })
}

/* 
 * mapStateToProps
*/
const mapStateToProps = (state) => {
  return {
      ...state
  };
}





class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: '',
    };
  }

  loginUserSuccess = (token) => {
    this.props.loginUserSuccess(token);
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json", "Access-Control-Origin": "*" },
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/form');
        return res.json();
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .then(data=> {
     // this.state.token = data.token
        this.props.loginUserSuccess(data.token)
    })
    .catch(error => {
      console.error(error);
      this.props.loginUserFailure(error)
     // alert('Error logging in please try again');
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>

        <Input
            className="col-6"
            type="email"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            placeholder="email"
            required
        />        

        <Input
            className="col-6"
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            placeholder="password"
            required
        />
        <input className="col-6" type="submit" value="Submit"/>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);