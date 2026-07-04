let ans = Number(prompt("Enter a number: "))
if(isNaN(ans)){
  console.log("Please enterinr a valid number.");
}
else if(ans >= 18){
  console.log("You are eligible to vote.");
}
else{
  console.log("You are not eligible to vote.");
}