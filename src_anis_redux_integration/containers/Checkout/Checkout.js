import React , { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
class Checkout extends Component{
    state = {
        ingredients : {
            salad : 0,
            cheese :0,
            meat :0,
            bacon :0
        }
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        let ing = {};
        for(let param of query.entries()){
            ing[param[0]] = +param[1];
        }
        console.log("====",ing);
        this.setState({ingredients : ing });
    }
    checkOutCancelHandler=()=>{
        this.props.history.goBack();
    }
    checkOutContinueHandler =()=>{
        this.props.history.replace('/checkout/contact-details');
    }
    render(){
        return (
        <React.Fragment>        
        <CheckoutSummary 
        ingredients={this.state.ingredients}
        onCancelled ={this.checkOutCancelHandler}
        onContinued = {this.checkOutContinueHandler}
         />
         <ContactData ingredients={this.state.ingredients} />
         </React.Fragment>
        )
    }
}

export default Checkout;