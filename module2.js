// const hello = require("./module1")

// console.log(hello());

/*const hi = require("./module1")
hello.hello()
hello.hi(" Shivani")
hello.hi(" Garima")
hello.hi(" Nitika")
hello.hi(" Aishwarya")*/

// instead of using hello function with hi again and again for
// each calling we  can use "destructuring" in javascript

// using common.js
/*const {hello, hi} = require("./module1")
hello()
hi(" Shivani")
hi(" Garima")
hi(" Nitika")
hi(" Aishwarya")*/

import himakshi, {hello, hi} from "./module1.js";

hello();
hi("Shivani");
hi("Rashmeet");
hi("Himakshi");
hi("Jyoti");

himakshi();










