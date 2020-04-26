
// // 'use strict';

// // // Assignment to a non-writable global
// // var undefined = 5; // throws a TypeError
// // var Infinity = 5; // throws a TypeError

// // // Assignment to a non-writable property
// // var obj1 = {};
// // Object.defineProperty(obj1, 'x', { value: 42, writable: false });
// // obj1.x = 9; // throws a TypeError

// // // Assignment to a getter-only property
// // var obj2 = { get x() { return 17; } };
// // obj2.x = 5; // throws a TypeError

// // // Assignment to a new property on a non-extensible object
// // var fixed = {};
// // Object.preventExtensions(fixed);
// // fixed.newProp = 'ohai'; // throws a TypeError



// // var a = {
// //     x :5,
// //     getx : function(val){
// //            console.log(this.x-val);
// //     }
// // };

// // var b = {
// //     x :7,
// //     getx : function(val){
// //         console.log(this.x-val);
// //     }
// // }
// // // binding this to object b 
// // a.getx.bind(b)(2);


// // var x = [1,2,3,4,2,5,6];

// // function isOdd(value){
// //     return value%2 !=0;
// // }

// // function reducer(accumulator,currentValue){
// //    return accumulator+currentValue
// // }

// // // returns the index of passed element ; -1 if not present
// // var index = x.indexOf(2);
// // console.log(index); //1

// // // returns the last index of passed element ; -1 if not present
// // var lastIndex = x.lastIndexOf(2);
// // console.log(lastIndex); //4

// // // tests if every element passes the test 
// // var result  = x.every(isOdd);
// // console.log(result); //false

// // // tests if any one of the element passes the test 
// // result  = x.some(isOdd);
// // console.log(result); //true

// // // executes the provided function once for every array element like for loop
// // x.forEach( function(element,index){
// //     console.log('index of : ',element ,'is : ' ,index);
// // }) 

// // // creates a new array by calling the provided function for each element in array
// // var resultArray = x.map(isOdd); 
// // console.log(resultArray);    //  [ true, false, true, false, false, true, false ]

// // // creates a new array consisting of only elements passing the test in the given function
// // var oddArray = x.filter(isOdd);
// // console.log(oddArray); // [ 1, 3, 5 ]

// // // returns a single value by applying the given function on each element of array
// // var reducedArray = x.reduce(reducer);
// // console.log(reducedArray); // 23


// // var jsonStr = '{"a": 1 ,"b":2 , "c":3}';
// // var jsonObj = JSON.parse(jsonStr);
// // console.log(jsonObj);

// // var obj =  { a: 1, b: 2, c : 3 };
// // var value = JSON.stringify(obj);
// // console.log(value);


// // var obj = {
// //     x : 10,
// //     get x(){
// //           return "hellow";
// //     }
// // }
// // console.log(obj.x);

// // class Node{
// //     constructor(data, next = null){
// //         this.data = data,
// //         this.next = next
// //     }
// // }

// // class LinkedList{
// //     constructor(){
// //         this.head = null;
// //     }
// // }
// // let list = new LinkedList();

// // var nums = new Array();
// // var o = [1,2,3,4,5,6,7,8,9,10];
// // const constArr = [1,2,3,4,5];
// // try {
// //     constArr = o;
// // } catch(err){}
// // o.forEach((v)=>{
// //     if(v%5 === 0){
// //         nums.push(v);
// //     }
// // });
// // console.log(nums);

// // const names = ["a","b","c"];
// // names[0] = "x";
// // console.log(names);


// // t();

// function f(name,age,li){
//     this.name = name;
//     this.age  = age;
//     this.li  = li;
// }

// var ff = new f("Anis",20,"coder");
// console.log(ff.name);

// class Blog {
//     constructor(id,title,author){
//         this._id = id;
//         this._title = title;
//         this._author = author;
//     }
//    set author(newAuthor){
//        this._author = newAuthor;
//    }
//    get author(){
//        return this._author; 
//    }
// }

// const blog1 = new Blog(1,"ES6" ,"Anis");

// console.log(blog1.author); // calls get author method

// blog1.author = "Anis Alam"; // calls set author method

// console.log(blog1.author); 


// const obj =  {
//     counter : 10,
//     decreaseCounter : (value)=>{
//           this.counter = this.counter-value
//     }
// }


// obj.decreaseCounter(5);
// console.log(obj.counter);

// //object 2
// const counter = 8;
// const obj2 =  {
//     counter : 10,
//     decreaseCounter : (value)=>{
//           this.counter = this.counter-value // global counter will  be decreased (8-5)
//     }
// }
// obj2.decreaseCounter(5);
// console.log(counter); // 3 will be printed


// /*******************************  
//  *  Destructuring Explained
// ********************************/

// // JavaScript has operations for constructing data , one property at a time :

// const obj1 = {};
// obj1.name = "anis";
// obj1.id   = 123;

// console.log(obj1);
// // To extract the data back , same syntax can be used 

// const name = obj1.name;
// const id   = obj1.id;

// // Multiple Properties can be constructed as below : 

// const obj2 = {name : "anis", id : 123};

// /* Before ES6 , There was no machenism  to extract data. Destructuring helps in extracting
//  multiple properties from an object via an object pattern. */

//  const { name: names , id :ids } = obj2;
//  console.log(names, ids);
 
//  // Array can also be destructured as below :
//    const [i,j] = [1,2];
//     console.log(i,j);  // i = 1  j = 2;
  
// // we can  choose   only those properties which we need 

// const {x:valueOfX} = {x:10,y:20};
// console.log(valueOfX); // prints 10

// const [m,n] = [1,2,3,4];
// console.log(m,n); // prints 1,2
  
// const {length : len} = 'abc'; // len = 3
// const {toString: s} = 123; // s = Number.prototype.toString
// console.log(len,s); // prints 1,2

// const [{ val: value } = { val: 123 }] = [];

// console.log(value) // prints 123


// Multiline String literal in ES5

// var info = { name: "Anis" };
// var details = { age: 25, degree: "M.Tech", CGPA: 7.97 };
// var message = "Hello my name is   " + info.name + "\n" +
// "and I am  " + details.age + " years old. \n" +
// "I have completed  " + details.degree + " with CGPA : "+details.CGPA;
// console.log(message);
// /*Hello my name is   Anis
// and I am  25 years old.
// I have completed  M.Tech with CGPA : 7.97
// */

// // The same messgae can be written in ES6 as below  : 

// const inStr = ` Hello my name is ${info.name}
// and I am ${details.age} years old. 
// I have completed ${details.degree} with CGPA :  ${details.CGPA}`;

// console.log(inStr);

//IN ES5 
// we have to check explicitely if value of parameter is undefined ten assign a value

function Users (name,address,pan) {
    if (pan === undefined)
    {
        pan = "NA";
    }
    this.name = name;
    this.address = address;
    this.pan = pan; 
       
};

const user1 = new Users('Anis','Pune','PPAX');
console.log(user1); // Prints  :  User { name: 'Anis', address: 'Pune', pan: 'PPAX' }
const user2 = new Users('Khushi','Punjab'); 
console.log(user2); // prints  : User { name: 'Khushi', address: 'Punjab', pan: 'NA' }


// IN ES6
// if value of pan parameters is undefined while calling then NA is used as default values
function User(name,address,pan="NA"){
    this.name = name;
    this.address = address;
    this.pan = pan;
}
const user1 = new User('Anis','Pune','PPAX');
console.log(user1); // Prints  :  User { name: 'Anis', address: 'Pune', pan: 'PPAX' }
const user2 = new User('Khushi','Punjab'); 
console.log(user2); // prints  : User { name: 'Khushi', address: 'Punjab', pan: 'NA' }

 
