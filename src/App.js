import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Logout/Logout';
import * as actions from './store/actions';

const asyncCheckout = asyncComponent(()=>{
   return import('./containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(()=>{
  return import('./containers/Orders/Orders');
});
const asyncLogin = asyncComponent(()=>{
  return import('./containers/Login/Login');
});

class App extends Component {
  
  componentDidMount() {
     this.props.onAutoSignUp();
  }
  

  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={asyncCheckout} />
            <Route path="/orders" component={asyncOrders} />
            <Route path="/login" component={asyncLogin} />
            <Route path="/logout" component={Logout} />                                    
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onAutoSignUp : ()=> dispatch(actions.loginCheckState())
  }
}
export default connect(null, mapDispatchToProps)(App);
