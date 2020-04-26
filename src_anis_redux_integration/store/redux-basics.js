const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
    counter : 0
}
//reducer

const rootReducer = (state = intialState ,action) =>{
    if(action.type === 'INCREMENT'){
        return {
            ...state,
            counter : state.counter + 1
        }
    } else if(action.type=== 'ADD_COUNTER'){
          return {
              ...state,
              counter : state.counter + action.value
          }
    }
    return state;
}



//create store
const store = createStore(rootReducer);
console.log(store.getState()); 

//Subscription
store.subscribe(()=>{
    console.log('subscriptiotn' , store.getState());
});

// action
store.dispatch({type:'INCREMENT'});
store.dispatch({type: 'ADD_COUNTER',value:10});
console.log(store.getState()); 

