import React ,{Component} from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Axios from '../../../core/axios-order';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
class ContactData extends Component{
   
    state = {
      contactData : {  
        name : '',
        email : '',
        phone : '',
        address : ''
       }
    }
   
    confirmOrder=(e)=>{
        e.preventDefault();
        console.log('confirmed',this.state.contactData);
        const orderData = {
            ingredients : {...this.props.ingredients},
            orderData : {...this.state.contactData}
        }
        console.log('order',orderData);
        Axios.post('/orders.json',orderData)
                .then((result)=>{
                    console.log('successful',result);
                })
                .catch(error=>{
                    console.log('successful',error);
                })
    }
    handleChange=(e,id)=>{
        console.log('chnaged',e.target.value,id);
        const copy = {...this.state.contactData};
        const updateValue = e.target.value;
        copy[id] = updateValue;
        this.setState({contactData : copy});
    }
    render(){
        const input = [
            {
                inputtype: 'input',
                id : 'name',
                config : {
                    placeholder: 'enter your name',
                    label: 'Enter Name :  ',
                },
                value : ''
            },
            {
                inputtype: 'input',
                id : 'email',                
                config : {
                    placeholder: 'enter your email',
                    label: 'Enter Email :  ',
                },
                value : ''
            },
            {
                inputtype: 'input',
                id : 'phone',                
                config : {
                    placeholder: 'enter your phone',
                    label: 'Enter Mobile :  ',
                },
                value : ''
            },
            {
                inputtype: 'textarea',
                id : 'address',                                
                config : {
                    placeholder: 'enter your address',
                    label: 'Enter address :  ',
                },
                value : ''

            },
        ];
    let inputs = input.map((input,index)=>{
        return <Input inputtype={input.inputtype} key={input.inputtype+index} changed={(event)=>this.handleChange(event,input.id)} value= {input.value} {...input}/>;
    })
        return(
            <div className={classes.ContactData}>
            <h4 style={{textAlign:'center'}}> Enter your details </h4>
            <form onSubmit={this.confirmOrder}>
             {inputs}
             <Button btnType="Success"> CONFIRM </Button>
             </form>
             </div>
        )
    }
};

export default withErrorHandler(ContactData,Axios);