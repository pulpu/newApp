import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { isNumericLiteral } from '@babel/types';

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
        user: [],
        error: null,
      };

  
    componentDidMount () {
        this.userId  = this.props.location.state.userId
        console.log(':::',this.userId)
        this.listingUsersData()
    }
    

    listingUsersData () {
        console.log('this',this)
       return fetch('https://reqres.in/api/users/' + this.userId )
            .then(res => res.json())
            .then(res => {
                this.setState({
                    user: res.data,
                    isLoading: false,
                  })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
        const { isLoading, user, error } = this.state;
        console.log('user',user)
        return (
          <div className="container">
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? 

                    <div className="card float-left ml-2"  key={user.id}>
                        <img className="card-img-top" src={user.avatar} alt={user.first_name + ' ' +  user.last_name}/>
                        <h5 className="card-title">{user.first_name + ' ' +  user.last_name} </h5>
                        <p className="card-text">email: {user.email}</p>
                    </div>
               
            
             : (
              <h3>Loading...</h3>
            )}
          </div>
        );
      }
}

export default  connect(mapStateToProps, mapDispatchToProps)(UsersListingComponent);