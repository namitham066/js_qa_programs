//function to remove dupliacte element from an array

let num =[1,2,3,2,2,4,56,56,5]
console.log("original array", num);

function duplicate(array){
let data = []
for(let i=0;i<array.length;i++){
        if(!data.includes(array[i])){
            data.push(array[i])
        }
}
return data
}
let result = duplicate(num)
console.log('array without duplicates', result);



