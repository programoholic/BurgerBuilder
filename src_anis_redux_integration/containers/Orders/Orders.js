import React , { Component } from 'react';
import Order from '../../components/Order/Order';
import Axios from '../../core/axios-order';
import Spinner  from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {

    state = {
        orders : [],
        loading : true
    };
    componentDidMount(){
      Axios.get('/orders.json')
            .then((result)=>{
                console.log('result ',result.data);
                let orderArr = Object.keys(result.data)
                            .map(orKey =>{
                               return result.data[orKey]    
                            });
                console.log('result ',orderArr);
               this.setState({orders : orderArr,loading:false});
            })
            .catch((err)=>{
                console.log('order is order');
                this.setState({loading:false});
            })
    }
    render(){

        let orders = this.state.orders.map((order,index)=>{
             return <Order order={order} key={order.customer.email+index} /> 
        })

        return (
            <div> 
               {(this.state.loading)? <Spinner /> : orders}
                {/* <Order /> */}
            </div>
        )
    }
}

export default withErrorHandler(Orders,Axios);