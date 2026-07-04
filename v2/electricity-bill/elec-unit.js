let unit = Number(prompt("Enter the unit:"));
let amount = 0;
if(unit > 400){
  amount = (unit - 400) * 4;
  unit = 400;
}
if(unit > 200 && unit <= 400){
  amount += (unit - 200) * 8;
}
if(unit > 100 && unit <= 200){
  amount += (unit - 100) * 6;
}
if(unit > 0 && unit <= 100){
  amount += unit * 5;
}

console.log(amount);
