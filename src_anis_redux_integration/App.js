import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
          <Route path="/orders" component= {Orders} />   
          <Route path="/checkout" component= {Checkout} />             
          <Route path="/"  component= {BurgerBuilder} />          
          </Switch>       
          {/* <BurgerBuilder />
          <Checkout /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
