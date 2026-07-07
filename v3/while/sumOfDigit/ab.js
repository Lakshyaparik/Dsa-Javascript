// let ans = prompt("Enter a number");
// while(ans != '1'){
//   ans = prompt("Enter a number");
// }

let n = prompt("Enter a number");

let sum = 0;
while(n>0){
  let rem = n%10;
  sum += rem;
  n = Math.floor(n/10);
}
console.log("Sum of digits is: " + sum);