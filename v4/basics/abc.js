let prompt = require('prompt-sync')();
//let a = prompt ('Enter the number')
//process.stdout.write('The number is: '+ a)

let n = prompt('Enter the number: ')
for(let i = 1; i<=n ; i++){
  process.stdout.write('* ')
}
