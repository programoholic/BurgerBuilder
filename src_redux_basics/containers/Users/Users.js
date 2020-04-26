import React, { Component } from 'react';
// import classnames from 'classnames';
// you should import `lodash` as a whole module
import _ from 'lodash';
import classes from './Users.css';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 5000;
// the exported component can be either a function or a class


class  Users extends Component {

  state = 
  {
      userInput :'',
      data : [],
      loading : false
  };
  constructor(props){
      super(props);
      this.typeHandler = _.debounce(this.getData, DEBOUNCE_DELAY);
  }
    getData() {
       let result = ["anis","anis","anis","anis","anis","anis"];
       this.setState({loading:true});
        fetch(ITEMS_API_URL + "?q=" + this.state.userInput)
            .then((res => res.json()))
            .then(result => {
              this.setState({loading:false});                
                this.setState({ data: result });
            }, (error) => {
                this.setState({loading:false});
                this.setState({ data: result });                
            })
    }
  
    onChange = (e) => {
        let value = e.target.value;        
        this.setState({userInput: value},()=>{
            this.typeHandler();
        });
        // this.setState({ userInput: value });
        // if (value.length >= 0) {
         
        // }
      }
      onSelectItem(item) {
           alert('hellow'+item);
      }
      clickHandler=(e)=>{
          this.onSelectItem(e.target.value)
      }
  render(){
     let lists = this.state.data.map((el,index)=>{
         return <div className={classes.listItem} key={el+index} onClick={() => this.onSelectItem(el)} >{el}</div>
     });
  return (
    <div className={classes.wrapper}>
      <div className="control">
       <input
          type="text"
          onChange={this.onChange}
          className={'input ' + (this.state.loading ? 'is-loading' :'')}
          value={this.state.userInput}
        />
      </div>
      <div className={classes.list}>
           {lists}
      </div>
    </div>
  );
    }
}

export default Users;





// fetch("https://api.example.com/items")
// .then(res => res.json())
// .then(
//   (result) => {
//     this.setState({
//       isLoaded: true,
//       items: result.items
//     });
//   },
//   // Note: it's important to handle errors here
//   // instead of a catch() block so that we don't swallow
//   // exceptions from actual bugs in components.
//   (error) => {
//     this.setState({
//       isLoaded: true,
//       error
//     });
//   }
// )











//  constructor(props){
//      super(props);
//     //  this.servicesValue = _.debounce(this.getData, 5000);
//     this.changeHandler = this.changeHandler.bind(this);
//  }
//   changeHandler(ev){
//     //  alert('')
//     //  let value = ev.target.value;
//      let value = ev.target.value;
//      console.log('value');
//     this.setState({userInput : value},()=>{
//         if(value){
//             this.getData(value);
//         }
//     });
//  }
// //  changeHandler=(ev)=>{
// //     let value = ev.target.value
// //     let   typingTimer;
// //      clearTimeout(typingTimer);
// //      typingTimer = setTimeout(this.getData(value), 5000);
// //  }
 
//   test=()=>{
   
//   }
//  getData= (value)=>{       
//     fetch(ITEMS_API_URL+"?q="+this.state.userInput)
//     .then((res=>res.json()))
//     .then(result=>{
//        this.setState({data : result}); 
//     },(error)=>{
//         console.log('error');  
//     })
//  }

//  onChange=(e)=>{
   
//     console.log('changed;');
//     let timer;

//     _.debounce(this.changeHandler(e),DEBOUNCE_DELAY);
    

//   }


// chnageHandlers = (e) => {
//     let value = e.target.value;
//     this.setState({ userInput: value }, () => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             this.getData();
//         }, DEBOUNCE_DELAY)
//     });
// }