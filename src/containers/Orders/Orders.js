import React, { Component } from 'react';
import { connect } from 'react-redux'

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/order';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
       this.props.onFetchOrders(this.props.token);
    }

    render () {
        let content = (this.props.loading) ? (<Spinner />) :
            (
                <div>
                    {this.props.orders.map(order => (
                        <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.price} />
                    ))}
                </div>
            );
        return content;
    }
}

const mapStateToProps = state =>{
    return {
        orders : state.orders.orders,
        loading : state.orders.fetching,
        token : state.authentication.userToken
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onFetchOrders : (token)=> dispatch(actions.fetchOrders(token))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios));