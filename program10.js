// including 0 after every 5 elements 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i]); 
  
  if ((i + 1) % 5 === 0) {
    result.push(0);
  }
}
console.log(result);


