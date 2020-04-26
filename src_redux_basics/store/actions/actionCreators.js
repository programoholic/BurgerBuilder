import * as actionTypes from '../actions';


const addIngeredient=(name)=>{
    return {
        type : actionTypes.ADD_INGREDIENT,
        ingredientName : name
    }
}

export const addIngredient = (ingName)=>{
     return dispatch =>{
        setTimeout(()=>{
            dispatch(addIngeredient(ingName));
        },2000)
     }
}