import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const burgerOrderSuccess = (order, orderId) => {
  return {
    type: actionTypes.ORDER_SUCCESS,
    value: order,
    orderId: orderId
  }
}

export const burgerOrderFailure = (order, error) => {
  return {
    type: actionTypes.ORDER_FAILURE,
    value: error,
  }
}

export const burgerOrderStart = () => {
  return {
    type: actionTypes.ORDER_START
  }
}

export const purchaseBurger = (orderData) => {
  return dispatch => {
    dispatch(burgerOrderStart());
    axios.post('/orders.json', orderData)
      .then(response => {
        console.log(response.data);
        dispatch(burgerOrderSuccess(orderData, response.data));
      })
      .catch(error => {
        dispatch(burgerOrderFailure(error));
      });
  }
}
export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
}

export const orderFetchInit = () => {
  return {
    type: actionTypes.ORDERS_FETCH_INIT
  }
}
export const orderFetchSuccess = (orders) => {
  return {
    type: actionTypes.ORDERS_FETCH_SUCCESS,
    orders: orders
  }
}
export const orderFetchFailure = (error) => {
  return {
    type: actionTypes.ORDERS_FETCH_FAILURE,
  }
}

export const fetchOrders = () => {
  return dispatch => {
    dispatch(orderFetchInit());
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(orderFetchSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(orderFetchFailure(err));
      });
  }


}
