import React ,{ Component } from 'react';
import Aux from '../../hoc/Aux';
import Result from '../../components/result/Result';
import CalcOptions from '../../components/calcOptions/CalcOptions';
import { connect } from 'react-redux';
// let result = 0;

class Calculator extends Component {
    
    state={
        result : 0
    };
  clickHandelor= (e)=>{
    console.log(e.target.innerText);
    let type = e.target.innerText;
    let newResult =0;
    switch(type){
        case 'ADD' : 
            //  newResult = this.state.result+5;
            // this.setState({result: newResult});
            this.props.onAdd();
            break;
        case 'SUBSTRACT' : 
             newResult = this.state.result-5;
            this.setState({result: newResult});
            break;  
        case 'INCREMENT' : 
             newResult = this.state.result+1;
            this.setState({result: newResult});
            break; 
        case 'DECREMENT' : 
             newResult = this.state.result-1;
            this.setState({result: newResult});
            break;             
    }
  }
    render(){
        return (
            <Aux>
                <div> 
                <Result  result={this.props.res}/>
                </div>
               <div> 
               <CalcOptions clicked={this.clickHandelor}/>
               </div>
                </Aux>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      res : state.result
    }
}
const mapDispatchToProps = (dispatch)=>({
     onAdd : () => dispatch({type : 'ADD'}) 
})
export default connect(mapStateToProps,mapDispatchToProps)(Calculator);
