import actionTypes from  './actionTypes';

const initialState = {
    ingredients : null,
    totalPrice : 4
}

const appReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT : 
        console.log(action);
        const oldCount = state.ingredients[action.type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...state.ingredients
        };
        updatedIngredients[action.type] = updatedCount;
        // const priceAddition = INGREDIENT_PRICES[type];
        // const oldPrice = this.state.totalPrice;
        // const newPrice = oldPrice + priceAddition;
          return updatedIngredients;
          case actionTypes.REMOVE_INGREDIENT : 
          return {
              ...state
          }
    }
    return state;
}

export default appReducer;