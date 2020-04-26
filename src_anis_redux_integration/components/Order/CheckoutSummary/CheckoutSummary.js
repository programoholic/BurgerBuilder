import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';
const orderSummary = (props)=>{
    console.log('got props as ',props);
    return (
        <div className={classes.CheckoutSummary}>
            <h3> Hope you like it : </h3>
            <div style={{width:'100%' , margin : 'auto'}}>
            <Burger ingredients = { props.ingredients }/>
            </div>
            <Button btnType="Danger" clicked={props.onCancelled}> CANCEL </Button>
            <Button btnType="Success" clicked={props.onContinued}> CONTINUE </Button>
        </div>
    )
}  

export default orderSummary;