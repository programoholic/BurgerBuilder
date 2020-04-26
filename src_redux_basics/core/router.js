import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Public from './components/Public';
// import Protected from './components/Protected';
import Auth from './Auth';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../containers/Checkout/Checkout';
import Orders from '../containers/Orders/Orders';
import Users from '../containers/Users/Users';

const Router = (props) => (
    <Switch>
            <Route path="/checkout" component={Checkout} />
            <PrivateRoute path="/orders" component={Orders} />
            <PrivateRoute path="/users" component={Users} />            
            <Route path="/" exact component={BurgerBuilder} />
    </Switch>    
)
const PrivateRoute = ({ component: Component, ...rest }) => (
<Route
{...rest}
render={props =>
Auth.getAuth() ? (
<Component {...props} />
) : (
<Redirect 
    to={{
    pathname: "/"
    }}
/>
)
}
/>
);
export default Router;