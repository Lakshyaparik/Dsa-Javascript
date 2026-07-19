//reverse with space
let arr = [10,20,30,40,50]
let temp = new Array(arr.length)
let j = 0;
for(let i = arr.length-1; i>=0; i--){
  temp[j] = arr[i]
  j++
}
//console.log(temp);

//reverse without space

let arr2 = [10,20,30,40,50]
let i = 0,k=arr.length-1;
while(i!=k){
  let temp;
  temp = arr2[i];
  arr2[i] = arr2[k];
  arr2[k] = temp;
  i++;
  k--; 
}
console.log(arr2);
