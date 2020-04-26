import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Users from './containers/Users/Users';
import Router from './core/router';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
           <Router />
          {/* <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/users" component={Users} />            
            <Route path="/" exact component={BurgerBuilder} />
          </Switch> */}
        </Layout>
      </div>
    );
  }
}

export default App;
