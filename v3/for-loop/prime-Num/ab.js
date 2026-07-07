//sum of n numbers

let n = Number(prompt("Enter a number:"));
if(isNaN(n) || n <= 0 || n === 1 || n === null) {
  console.log("Please enter a valid number");
}
else{
  let isPrime = true;
  for(let i=2; i<=Math.floor(n/2) ; i++){
    if(n % i === 0){
      isPrime = false;
      break;
    } 
  }
  if(isPrime){
    console.log(n + " is a prime number");
  }
  else{
    console.log(n + " is not a prime number");
  }
}