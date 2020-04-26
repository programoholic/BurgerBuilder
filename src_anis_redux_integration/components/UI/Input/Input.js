import React from 'react';
import classes from './Input.css';
const input  = (props)=>{
    let inputElement = null;
     switch(props.inputtype){
         case  'input' : 
                inputElement = <input className={classes.InputElement} onChange={props.changed} {...props.config} />
                break;

        case  'textarea' : 
                inputElement = <textarea className={classes.InputElement}  onChange={props.changed} {...props.config} />
                break;    
        default : 
           inputElement = <input className={classes.InputElement}  onChange={props.changed} {...props.config}  />
                  
     }
return (
    <div className={classes.Input}>
    <label className={classes.Label}> {props.label} </label>
        {inputElement}
    </div>
)

}
export default input;