let prompt = require("prompt-sync")({ sigint: true });
let n = Number(prompt("Enter the number: "));

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for(let i = 1; i <= n; i++) {
  for(let j = 1; j <= n; j++) {
   // process.stdout.write("* ");
  }
  console.log(); // Move to the next line after each row
}



// *
// * *
// * * * 
// * * * *
// * * * * *

for(let i=1; i<=n; i++){
  for(let j=1; j<=i;j++){
    //process.stdout.write("* ");
  }
  console.log(); // Move to the next line after each row
}


for(let i=1; i<=n;i++){
  for(j=1;j<=i;j++){
    let char = 'A';
    //process.stdout.write(char + " ");
    ++char;
  }
  console.log(); // Move to the next line after each row
}



// A 
// A B
// A B C
// A B C D

for(let i=1; i<=n; i++){
  let char =  65;
  for(let j=1;j<=i;j++){
    process.stdout.write(String.fromCharCode(char)+ " ");
    char++;
  }
  console.log();
  
}