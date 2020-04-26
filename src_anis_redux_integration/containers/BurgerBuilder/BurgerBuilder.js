import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../core/axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import ActionTypes from '../../store/actionTypes';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading : false,
        error :false
    }

    componentDidMount(){

        axios.get('https://burger-builder-d7a07.firebaseio.com/ingredients.json')
            .then((result)=>{
                this.setState({ingredients:result.data});
            })
            .catch(err=>{
                console.log(err);
                this.setState({error:true});
            })
            ;


    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        // alert('You continue!');
        // this.setState({loading : true});
        // const orderDetails = {
        //     ingredients : this.state.ingredients,
        //     price : this.state.totalPrice,
        //     customer : {
        //         name : 'Aneesh Alam',
        //         email : 'test@test.com',
        //         address : {
        //             street : 'Test1',
        //             zipCode : '1234',
        //             country : 'India'
        //         }
        //     },
        //     deliveryMethod  :'fastest'
        // };

        // axios.post('/orders.json',orderDetails)
        //      .then((result)=>{
        //          console.log('result',result);
        // this.setState({loading : false,purchasing : false});
        // this.setState({})
        //      })
        //      .catch((error)=>{
        //          console.log('error',error);
        // this.setState({loading : false,purchasing : false});
                 
        //      })

        const queryParams = [];
        for(let ing in this.props.ingredients){
            queryParams.push(encodeURIComponent(ing)+ "="+encodeURIComponent(this.props.ingredients[ing]));
        }
        const queryString = queryParams.join('&');
        this.setState({loading : false,purchasing : false});        
        this.props.history.push(
            {
             pathname :'/checkout',
             search : '?'+ queryString
        }
    );
    }

    render () {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // {salad: true, meat: false, ...}
        let orderSummary = null;
            
           let controls = this.state.error ? <p> Failed to load the ingredients .. try later </p> : <Spinner />; 
            if(this.props.ingredients){
                controls = (
                    <Aux>
                     <Burger ingredients={this.props.ingredients} />
                         <BuildControls
                             ingredientAdded={this.props.onIngredientAdded}
                             ingredientRemoved={this.removeIngredientHandler}
                             disabled={disabledInfo}
                             purchasable={this.state.purchasable}
                             ordered={this.purchaseHandler}
                             price={this.state.totalPrice} />
                     </Aux>
                     );
                     orderSummary = <OrderSummary 
                     ingredients={this.props.ingredients}
                     price={this.state.totalPrice}
                     purchaseCancelled={this.purchaseCancelHandler}
                     purchaseContinued={this.purchaseContinueHandler} />;      
            }    
            if(this.state.loading){
                orderSummary = <Spinner />;
            }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {controls}
            </Aux>
        );
    }
}
const mapStateToProps = state =>{
return {
   ingredients : state.ingredients
}
}
const mapDispatchToProps= (dispatch) =>{
    return {
        onIngredientAdded : (type)=>dispatch({type : ActionTypes.ADD_INGREDIENT,value :type}),
        onIngredientRemoved : (type) => dispatch({type : ActionTypes.REMOVE_INGREDIENT, value : type})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder,axios));