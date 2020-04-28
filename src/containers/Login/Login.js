import React , { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import * as loginActions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import { checkValidity } from '../../core/formValidityChecker';
import classes from './Login.module.css';

class Login extends Component {

    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail : true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength : 6
                },
                valid: false,
                touched: false
            },
    },
    formIsValid :false,
    isSignUpMode : true
}
componentDidMount() {
    if(! this.props.building  && this.props.redirectUrl !== '/' )
    this.props.onSetRedirectUrl();
}

inputChangedHandler = (event, inputIdentifier) => {
    const updatedLoginForm = {
        ...this.state.loginForm
    };
    const updatedFormElement = { 
        ...updatedLoginForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedLoginForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    for (let inputIdentifier in updatedLoginForm) {
        formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({loginForm: updatedLoginForm, formIsValid: formIsValid});
}
loginHandler = (e)=>{
     this.props.onUserLogin(this.state.loginForm.email.value,this.state.loginForm.password.value,this.state.isSignUpMode);
}

toggleSignUp = (event ) => {
    this.setState((prevState)=>{
       return {
           isSignUpMode : !prevState.isSignUpMode
       }
    })
}
    render(){
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }
        let form = (
            <form onSubmit={this.loginHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}> { (!this.state.isSignUpMode)? ' Login ' : ' SIGN UP '} </Button> 
            </form>
        );
        let redirect = null;
        if(this.props.loading){
            form = <Spinner />
        }
        if(this.props.userToken){
              debugger
             redirect = <Redirect to ={this.props.redirectUrl} />
        }
        return (
            <div className={classes.Login}>
               {redirect}
               {form}
               <Button btnType="Danger" clicked={this.toggleSignUp}>Switch to
                { (this.state.isSignUpMode)? ' Login ' : ' SIGN UP '} 
                mode </Button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
  return {
      loading : state.authentication.loading,
      userToken : state.authentication.userToken,
      redirectUrl : state.authentication.redirectUrl,
      building : state.burgerBuilder.building,
  }
}
const mapDispatchToProps = dispatch =>{
    return {
        onUserLogin : (email,password,isSignUp) => dispatch(loginActions.userLogin(email,password,isSignUp)),
        onSetRedirectUrl : ()=> dispatch(loginActions.setRedirectUrl('/'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Login , axios));
