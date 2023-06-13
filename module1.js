
// using common.js
/*const hello = ()=>{
    console.log("Hello from module1")
}

module.exports = hello;

const hi = (name)=>{
    console.log("Hello" + name)
}*/

// module.exports = {hello: hello, ahello: ahello};
// instead of writing above line we can write as below as well

// module.exports = {hello,hi};


// Es6 modules

export const hello = ()=>{
    console.log("Hello from module1")
}

export const hi = ()=>{
    console.log("Hello" + name)
}

// if you want that your function will print any default 
// value, then 
const himakshi = ()=>{
    console.log("Hello" + "Himakshi")
}

export default himakshi;