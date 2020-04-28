import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../hoc/asyncComponent/asyncComponent';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';
import Logout from '../containers/Logout/Logout';

const asyncCheckout = asyncComponent(() => {
    return import('../containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(() => {
    return import('../containers/Orders/Orders');
});
const asyncLogin = asyncComponent(() => {
    return import('../containers/Login/Login');
});

export const Router = (props) => (

    <Switch>
        <PrivateRoute path="/checkout" component={asyncCheckout} />
        <PrivateRoute path="/orders" component={asyncOrders} />
        <Route path="/login" component={asyncLogin} />
        <PrivateRoute path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
    </Switch>
)
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => props.isAuth ?
            (<Component {...props} />) :
            <Redirect to={{ pathname: "/login" }} />
        }
    />
);
export default Router;