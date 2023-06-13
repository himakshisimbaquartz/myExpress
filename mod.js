
// for loop in js

/*const arr = [456, 73, 77, 56, 98];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}*/



/*let sum=0;
 let n = prompt("Enter the number");
 n = Number.parseInt(n);
 for(let i=0;i<n;i++){
   sum += (i+1)

 }
 console.log("sum of first" +n+ "natural number is" +sum)

*/


/*let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str);
*/


// for-in loop in javascript
/* The for...in statement iterates over all enumerable string properties of
 an object (ignoring properties keyed by symbols), including inherited enumerable properties.*/

 /*const obj = {name: "Himakshi",
             email:"abc@gmail.com",
             location:"Guwahati",
             }
 for(const i in obj){
    // console.log(obj)
    console.log(`${i}: ${obj[i]}`)
 }     */
 
/*const person = {fname:"Himakshi",lname:"Talukdar",age:"22"};
 let text="";
 for(let i in person){
    text += person[i] +  " ";
 }
 console.log(text)*/


 /*let obj ={himakshi: 90,
Rashmeet:95,
Jyoti:87,
Nikhil:90
}
for(let a in obj){
    console.log("Marks of " +a+ "are " + obj)
    console.log("Marks of " +a+ "are " + obj[a])
}*/


 
// for-of loop

// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include 
// instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList
//  (and other DOM collections), as well as the arguments object, generators produced by
//  generator functions, and user-defined iterables.


// 1
/*const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}/

/*A for...of loop operates on the values sourced from an iterable one by one in sequential order.Each operation of the loop on a value
is called an iteration, and the loop is said to iterate over the iterable.Each iteration executes statements that may refer to the current sequence value.*/ 

/*const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}*/

// Destructing  assignment

/*
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
*/

// iterating over a string

/*const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}*/

// Iterating over a map

/*const iterable = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
  
  for (const entry of iterable) {
    console.log(entry);
  }
  
  for (const [key, value] of iterable) {
    console.log(value);
  }*/

  

  









