prompt = require('prompt-sync')()
//arrray -> in javascript is a object

let arr = [4,5,6]
arr[7] = 'lakshya'  
//console.log(arr);
//console.log(arr.length);

let p = new Array(5)
//console.log(p.length);

//let input = []

// for(let i=0;i<=5;i++){
//   let ans=prompt('Enter the value')
//   input.push(ans)
// }
//console.log(input);

let arr1 =[1,2,3,4,5]
let sum = 0;

for(let i=1;i <= arr1.length;i++){
  
  sum += arr1[i]
}
//console.log('sum ' + sum);


//maximum element in array

let arr2 = [10,4,34,59,23,95,{},33,65,19,2]

let max = arr2[0]

for(let i = 1; i < arr2.length; i++){
  if(max < arr2[i]){
    max = arr2[i]
  }
}

console.log('max element ', max);
