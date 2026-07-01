console.log(Math.round(10.8));// 11 rounds to the nearest integer
console.log(Math.ceil(10.2));// ceils to the next integer  upwards
console.log(Math.floor(10.8));//10 floors to the next integer downwards
console.log(Math.trunc(10.3));// 10 truncates the decimal part remaining only the integer part
console.log(Math.pow(2,3));// 2 raised to the power of 3 = 8
console.log(Math.sqrt(55));// square root of 55 = 7.416198487095663
console.log(Math.abs(-22)); // 22 absolute value of -22
console.log(Math.max(22,5,225));// 225 maximum value among the numbers
console.log(Math.min(22,5,225));// 5 minimum value among the numbers
console.log(Math.random()*10);// generates a random number between 0 and 10
console.log(55.00084.toFixed(4));// rounds the number to 3 decimal places


//to generate otp of 4 digits

console.log(Math.trunc(Math.random()*9000 +1000));// generates a random number between 1000 and 9999

//area of triangle by herons formula

let a = 5;
let b = 6;
let c = 7;

// herons formula square root of s(s-a)(s-b)(s-c) where s = (a+b+c)/2

let s = (a+b+c)/2;
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log('area',area);



