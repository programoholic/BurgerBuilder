import React from 'react';
import CalcOption from './calcOption/CalcOption';

const optionsArr = [
    { id :1,name : 'ADD' , value:5},
    { id :2,name : 'SUBSTRACT' , value:-5},
    { id :3,name : 'INCREMENT' , value:1},
    { id :4,name : 'DECREMENT' , value: -1},    
];

const calcOptions = (props)=>{
    const options = optionsArr.map((op)=>{
        return <CalcOption key={op.id} options={op} clicked={props.clicked}/>
    });  
    return(
        <div> 
            {options}
        </div>
     )
}

export default calcOptions;