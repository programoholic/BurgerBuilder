import * as actionTypes from './actionTypes';
import axios from 'axios';

const USER = 'user';
const TIMER = 'exiprationTime';
const USER_ID = "userId";
export const loginInit = () => {
    return {
        type: actionTypes.LOGIN_INIT
    }
}


export const loginSuccess = (authToken, userId) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: authToken,
        user: userId
    }
}

export const loginFailure = (error) => {
    return {
        type: actionTypes.LOGIN_FAILURE,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem(USER);
    localStorage.removeItem(TIMER);
    localStorage.removeItem(USER_ID);
    
    return {
        type: actionTypes.USER_LOGOUT
    }
}
export const checkTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
          dispatch(logout());
        }, expirationTime * 1000);
    }
}

export const userLogin = (email, password, isSignUp) => {
    const userData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxR74ingZjgNtis1iRzLHIJg2jB-ifLpo`;
    if (!isSignUp) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxR74ingZjgNtis1iRzLHIJg2jB-ifLpo`;

    }
    return dispatch => {
        dispatch(loginInit());
        axios.post(url, userData)
            .then((response) => {
                console.log('response', response);
                localStorage.setItem(USER,response.data.idToken);
                localStorage.setItem(TIMER,new Date(new Date().getTime()+response.data.expiresIn*1000));                
                localStorage.setItem(USER_ID , response.data.localId);
                dispatch(loginSuccess(response.data.idToken,response.data.localId))
                dispatch(checkTimeout(response.data.expiresIn))
            })
            .catch((err) => {
                console.log('error is ', err);
                dispatch(loginFailure(err))
            })
    }
}

export const loginCheckState = () => {
    return dispatch => {
        debugger
        const token = localStorage.getItem(USER);
        if (!token) {
            dispatch(logout());
        } else {
            const expirationTime = localStorage.getItem(TIMER);
            const expirationDate = new Date(expirationTime);
            if (expirationDate > new Date() ) {
                const timeToLogout = (expirationDate.getTime() - new Date().getTime())/ 1000;
                dispatch(loginSuccess(token, localStorage.getItem(USER_ID)))
                dispatch(checkTimeout(timeToLogout));
            } else {
                dispatch(logout());
            }
        }
    }
}