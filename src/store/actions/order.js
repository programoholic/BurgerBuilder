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

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(burgerOrderStart());
    axios.post('/orders.json?auth=' + token, orderData)
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

export const fetchOrders = (token) => {
  return (dispatch) => {
    debugger
    dispatch(orderFetchInit());
    if (!token) {
      token = localStorage.getItem('token');
    }
    if (!token) {
      dispatch(orderFetchFailure('invalid token'))
    } else {
      axios.get('/orders.json?auth=' + token)
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
}
