import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  })
  
  
  /* 
   * mapStateToProps
  */
  const mapStateToProps = state => ({
    ...state
  })

  const cardStyle = {
    width: '18rem'
  };


class UsersListingComponent extends Component { 
    state = {
        isLoading: true,
        users: [],
        error: null
      };

  
    componentDidMount() {
        this.listingUsersData();
    }

    listingUsersData () {
       return fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    users: res.data,
                    isLoading: false,
                  })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
        const { isLoading, users, error } = this.state;
        return (
          <div className="container">
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
              users.map(user => {
                const { id, avatar, first_name, last_name, email } = user;
                return (
                    <div className="card float-left ml-2" style={cardStyle} key={id}>
                        <img className="card-img-top" src={avatar} alt={first_name}/>
                        <h5 className="card-title">{first_name} {last_name}</h5>
                        <p className="card-text">email: {email}</p>
                        <Link className="btn btn-primary" to={{
                                    pathname: '/user',
                                    state: { userId: id }
                                    }}> Edit info </Link>
                    </div>
                );
              })
            ) : (
              <h3>Loading...</h3>
            )}
                <div className="card float-left ml-2" style={cardStyle}>
                    <input type="text" name="src" value=""/>
                    <input type="text" name="first_name" value=""/>
                    <input type="text" name="last_name" value=""/>
                    <input type="text" name="email" value=""/>
                </div>
          </div>
        );
      }
}

export default  connect(mapStateToProps, mapDispatchToProps)(UsersListingComponent);