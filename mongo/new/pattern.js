// Method 1

for (let i = 0; i < 10000; i++) {
    let id = String(i + 1);
    
    const generate = (ids) => {
      let patt = "SQ-BK-";
      let arr = ids.split("");
      if (arr.length === 1) {
        return patt + "00" + ids;
      } else if (arr.length === 2) {
        return patt + "0" + ids;
      } else {
        return patt + ids;
      }
    };
  
    const patterns = generate(id);
    console.log(patterns);
  }
  

//   Method 2
let id = 1;

const generatePattern = (id) => {
  let pattern = "SQ-BK-";
  let formattedId = String(id).padStart(3, "0");
//The padStart() function is a method available on strings in JavaScript. It allows 
//you to pad the start of a string with a specific character or a repeated sequence of characters until
//it reaches a specified length.
  return pattern + formattedId;
};

for (let i = 0; i < 10000; i++) {
  const pattern = generatePattern(id);
  console.log(pattern);
  id++;
}



