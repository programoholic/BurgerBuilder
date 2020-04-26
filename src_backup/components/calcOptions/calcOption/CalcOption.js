import React from 'react';

const calcOption = (props)=>{
    return(
        <button onClick={props.clicked}>
            {props.options.name}
        </button>
        
    )
}
export default calcOption;