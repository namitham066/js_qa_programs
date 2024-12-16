// find second max and min number in an array 
             let num = [10,20,1,3,2,9,11]
            num.sort((a,b) => (a-b))

            let seconmin = num[1]
            let secondmax = num[num.length-1]
            console.log('second minimum number is', seconmin);
            console.log('second maximum number is', secondmax);

//without using sort method
let arr = [10, 20, 5, 8, 15];

let max = arr[0];
let min = arr[0];
let secondMax = arr[0];
let secondMin = arr[0];


for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondMax && arr[i] < max) {
        secondMax = arr[i];
    }
    if (arr[i] < secondMin && arr[i] > min) {
        secondMin = arr[i];
    }
}

console.log("Second Min:", secondMin);
console.log("Second Max:", secondMax);
