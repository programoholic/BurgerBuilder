import * as actionType from '../actions/actionTypes';
import {
    updateObject
} from '../utility';
const initialState = {
    orders: [],
    loading: false,
    purchased: false,
    fetching: false
}

const purchaseInit = (state, action) => {
    return updateObject(state, {
        purchased: true
    })
}
const orderStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}
const orderSuccess = (state, action) => {
    let newOrder = updateObject(action.value, {
        id: action.orderId.name
    });
    return updateObject(state, {
        loading: false,
        purchased: false,
        orders: state.orders.concat(newOrder)
    })
}

const orderFailure = (state, action) => {
    return updateObject(state, {
        loading: false
    })
}
const orderFetchInit = (state, action) => {
    return updateObject(state, {
        fetching: true
    });
}
const orderFetchSuccess = (state, action) => {
    return updateObject(state, {
        fetching: false,
        orders: action.orders
    })
}
const orderFetchFailure = (state, action) => {

    return updateObject(state, {
        fetching: false,
    })

}



const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.PURCHASE_INIT:
            return purchaseInit(state, action);
        case actionType.ORDER_START:
            return orderStart(state, action);
        case actionType.ORDER_SUCCESS:
            return orderSuccess(state, action);
        case actionType.ORDER_FAILURE:
            return orderFailure(state, action);
        case actionType.ORDERS_FETCH_INIT:
            return orderFetchInit(state, action);
        case actionType.ORDERS_FETCH_SUCCESS:
            return orderFetchSuccess(state, action);
        case actionType.ORDERS_FETCH_FAILURE:
            return orderFetchFailure(state, action);
        default:
            return state
    }
}

export default orderReducer;
