import React from 'react';
import classes from './Order.css';
const order = (props)=>{
    console.log(props);
    return (
        <div className={classes.Order}>
            <div> Ingredients :  </div>
            <div> Price : {props.order.price} INR </div>
        </div>
    )
}

export default order;