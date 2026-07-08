// let ans = prompt("Enter a number");
// while(ans != '1'){
//   ans = prompt("Enter a number");
// }

let n = Number(prompt("Enter a number"))
let temp = n;

if(isNaN(n) || n < 1 || n === null){
  console.log("Please enter a valid number");
}
else{
  let sum = 0;
  while(n>0){
    
    let rem = n % 10;
    let fact = 1;
    while(rem>0){
      fact *= rem;
      rem--;
    }
    sum += fact;
    n = Math.floor(n/10);
  }

  if(sum == temp){
    console.log("The number is a strong number");
  }
  else{
    console.log("The number is not a strong number");
  }
}
