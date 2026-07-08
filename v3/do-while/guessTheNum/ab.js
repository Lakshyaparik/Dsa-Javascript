let n = Math.floor(Math.random() * 10) + 1;
let guess;
do{
  guess = prompt("Guess a number between 1 and 10:");
  if(isNaN(guess) || guess < 1 || guess > 100 || guess === null){
    alert("Please enter a valid number between 1 and 10.");
    continue;
  }
  if(guess < n){
    alert("Too low! Try again.");
  }
  else if(guess > n){
    alert("Too high! Try again.");
  }
  else{
    alert("Congratulations! You guessed the number " + n + " correctly!");
  }
}while(guess != n);