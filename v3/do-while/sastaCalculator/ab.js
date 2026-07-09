let fun = 'abc';
let val1,val2;
do{
  fun = Number(prompt('Enter 1,2,3,4 for add,mul,div,mod: '))
  if(isNaN(fun) || fun < 1 || fun > 4 || fun === null){
    alert('Invalid Input')
    continue;
  }

  val1 = Number(prompt('Enter the first Value'))
  if(isNaN(val1) ||  val1 === null){
    alert('Invalid Input')
    continue;
  }
  val2 = Number(prompt('Enter the second Value'))
  if(isNaN(val2) || val2 === null){
    alert('Invalid Input')
    continue;
  }
  console.log(val1,'and', val2);
  
  if(fun === 1){
    alert('The output of the values u give is : '+ (val1 + val2))
  }
  if(fun === 2){
    alert('The output of the values u give is : ' + (val1*val2))
  }
  if(fun === 3){
    alert('The output of the values u give is : ' + (val1/val2))
  }
    if(fun === 3){
    alert('The output of the values u give is : '+ (val1%val2))
  }
  
  fun = prompt('For exit type exit else press enter')

}while(fun != 'exit')