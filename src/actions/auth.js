


export const loginUserSuccess = (token) => dispatch => {
  dispatch({
    type: 'LOGIN_USER_SUCCESS',
    payload: {
      token:token,
      boolean: true
    },
  })
}

export function loginUserFailure(error) {
  return {
    type: 'LOGIN_USER_FAILURE',
    payload: {
      status: error,
    }
  }
}

// export function loginUserRequest() {
//   return {
//     type: 'LOGIN_USER_REQUEST'
//   }
// }

// export function logout() {
//     localStorage.removeItem('token'); // trebuie sa folosesc redux comment
//     return {
//         type: 'LOGOUT_USER'
//     }
// }

// export function logoutAndRedirect() {
//     return (dispatch, state) => {
//         dispatch(logout());
//         dispatch(pushState(null, '/login'));
//     }
// }

// export function loginUser(email, password, redirect="/") {
//     return function(dispatch) {
//         dispatch(loginUserRequest());
//         return fetch('http://localhost:3000/auth/getToken/', {
//             method: 'post',
//             credentials: 'include',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//                 body: JSON.stringify({email: email, password: password})
//             })
//             .then(checkHttpStatus)
//             .then(parseJSON)
//             .then(response => {
//                 try {
//                     let decoded = jwtDecode(response.token);
//                     dispatch(loginUserSuccess(response.token));
//                     dispatch(pushState(null, redirect));
//                 } catch (e) {
//                     dispatch(loginUserFailure({
//                         response: {
//                             status: 403,
//                             statusText: 'Invalid token'
//                         }
//                     }));
//                 }
//             })
//             .catch(error => {
//                 dispatch(loginUserFailure(error));
//             })
//     }
// }

// export function receiveProtectedData(data) {
//     return {
//         type: RECEIVE_PROTECTED_DATA,
//         payload: {
//             data: data
//         }
//     }
// }

// export function fetchProtectedDataRequest() {
//   return {
//     type: FETCH_PROTECTED_DATA_REQUEST
//   }
// }

// export function fetchProtectedData(token) {

//     return (dispatch, state) => {
//         dispatch(fetchProtectedDataRequest());
//         return fetch('http://localhost:3000/getData/', {
//                 credentials: 'include',
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             })
//             .then(checkHttpStatus)
//             .then(parseJSON)
//             .then(response => {
//                 dispatch(receiveProtectedData(response.data));
//             })
//             .catch(error => {
//                 if(error.response.status === 401) {
//                   dispatch(loginUserFailure(error));
//                   dispatch(pushState(null, '/login'));
//                 }
//             })
//        }
// }