let a = 11, b = 22;
let c = a  +  b + a++ + b++ + ++a + ++b;
console.log(c); // 11 + 22 + 11 + 22 + 13 + 24 = 103
console.log(b);
console.log(a);

