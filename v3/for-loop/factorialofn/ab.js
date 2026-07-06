//sum of n numbers

let n = Number(prompt("Enter a number:"));
if(isNaN(n) || n <= 0 || n === null) {
  console.log("Please enter a valid number");
}
else{
 let fact = 1;
 for (let i = 1; i <= n; i++) {
  fact *= i;
 }
 console.log('factorial of number of'+n + " :"+ fact);
 
}