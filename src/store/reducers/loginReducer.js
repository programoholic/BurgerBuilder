import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
   loading : false,
   userToken : null,
   userData : null,
   error : null,
   redirectUrl : '/'
}

const loginInit = (state,action) => {
    return updateObject(state , { loading :true });
}
const loginSuccess = (state,action) => {
    return updateObject(state , { loading : false , userToken : action.token, userData : action.user });
}
const loginFailure = (state,action) => {
    return updateObject(state , { loading : false , error : action.error});
}

const logout = (state,action) =>{
    return updateObject(state, { userToken : null, userData : null });
}
const setRedirectUrl = (state , action)=>{
    return updateObject(state, { redirectUrl : action.value});
}

const loginReducer = (state = initialState , action) => {
    switch(action.type){
       case actionTypes.LOGIN_INIT : return loginInit(state,action);
       case actionTypes.LOGIN_SUCCESS : return loginSuccess(state,action);
       case actionTypes.LOGIN_FAILURE : return  loginFailure(state,action); 
       case actionTypes.USER_LOGOUT : return logout(state,action);  
       case actionTypes.REDIRECT_URL_CREATED : return setRedirectUrl(state,action);
       default : return state;      
    }
}

export default loginReducer;