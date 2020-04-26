const initialState = {
    result :0
};

const reducer = (state=initialState, action)=>{
    if(action.type === 'ADD'){
        console.log('counter,',state);
        return {
            result :state.counter+5
        }
    }
    return state;
}

export default reducer;