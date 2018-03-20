// Stinng
const name1 = 'Jeff';
const name2 = new String('Jeff');

// console.log(name1);
// console.log(name2);

if(name2 === 'Jeff'){
  console.log('YES');
}else{
  console.log('NO');
}

// Number

const num1 = 5;
const num2 = new Number(5);

console.log(num2);

console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(bool2);


// Function
const getSum1 = function(x,y){
  return x+y;
}

const getSum2 = new Function('x','y','return 1+1');

// console.log(getSum2(1,1));

// Object

const anuwat1 = {name: "anuwat"};
const anuwat2 = new Object({name: "anuwat"});

console.log(anuwat2);

// Array
const arr1 = [1,2,3];
const arr2 = new Array(1,2,3,4);


console.log(arr2);



// Regex

const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);

















