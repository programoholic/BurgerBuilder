// const redux = require('redux');
// const createStore  = redux.createStore;

// const initialState={
//     result :0
// }

// //Reducer
// const rootReducer = (state=initialState,action) => {
//     return state;
// } 

// //store
// const store  = createStore(rootReducer);
// console.log(store.getState());
// //Action

//dispatcher

//subscriber 



// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(N) {
//     // write your code in JavaScript (Node.js 8.9.4)
//      const magicNum = 5; 
//      let flag = false;
//      if(N>=0){
//          let numArr = String(N).split('');
//          for(let i=0;i<numArr.length;i++){
//              if(Number(numArr[i])<magicNum && flag!=true){
//                  flag=true;
//                  numArr.splice(i,0,magicNum);
//                  return Number(numArr.join(''));
//              }
//          }
//          if(!flag){
//             numArr.push(magicNum);
//             return Number(numArr.join(''));
//          }
//      } else{
//           let numArr = String(N).split('');
//             numArr.splice(0,1);
//          for(let i=0;i<numArr.length;i++){
//              if(Number(numArr[i])>magicNum && flag!=true){
//                  flag=true;
//                  numArr.splice(i,0,magicNum);
//                  numArr.unshift("-");
//                  return Number(numArr.join(''));
//              }
//          }
//          if(!flag){
//             numArr.push(magicNum);
//             numArr.unshift("-");
//             return Number(numArr.join(''));
//          }
//      } 
// }

// // console.log(solution(678));
// // console.log(solution(99994566));
// // console.log(solution(678));
// // console.log(solution(678));

// function Destructuring(){
    
// }


class Database {
    constructor(data) {
      if (Database.exists) {
        return Database.instance;
      }
      this._data = data;
      Database.instance = this;
      Database.exists = true;
      return this;
    }
  
    getData() {
      return this._data;
    }
  
    setData(data) {
      this._data = data;
    }
  }
  
  // usage
  const mongo = new Database('mongo');
  console.log(mongo.getData()); // mongo
  
  const mysql = new Database('mysql');
  console.log(mysql.getData()); // mongo
  