//sum of n numbers

let n = Number(prompt("Enter a number:"));
if(isNaN(n) || n <= 0 || n === null) {
  console.log("Please enter a valid number");
}
else{
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    if(n%i==0){
      console.log(i +' is the factor of '+ n);
      
    }
  }
  console.log("The sum of first " + n + " numbers is: " + sum);
}