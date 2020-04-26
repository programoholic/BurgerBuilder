import * as actionTypes  from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingName)=>{
    return {
        type: actionTypes.ADD_INGREDIENT, 
        ingredientName: ingName
    }
}

export const removeIngredient = (ingName)=>{
    return {
        type: actionTypes.REMOVE_INGREDIENT, 
        ingredientName: ingName
    }
}

export const setIngredients = (ingredients)=>{
   return {
     type :   actionTypes.SET_INGREDIENTS,
     value : ingredients
   }
}

export const setFetchError = ()=>{
    return {
        type : actionTypes.INGREDIENT_FETCHED_FAILED
    }
}

export const initIngredient = ()=>{
    return dispatch =>{
      axios.get('/ingredients.json').then((response)=>{
          dispatch(setIngredients(response.data))
      })
      .catch((er)=>{
          dispatch(setFetchError());
      })
    }
}