// Person constructor

function Person(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return "Hello there " + this.firstName + " " + this.lastName;
} 

const person1 = new Person('Anuwat','AK');
console.log(person1.greeting());

function Customer(firstName,lastName,phoneNum,memberShip){
 Person.call(this, firstName,lastName);
 this.phoneNum = phoneNum;
 this.memberShip = memberShip;
}

// Inherit

Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return customer
Customer.prototype.constructor = Customer;

// Create Customer
const customer1 = new Customer('Tom','Smith','555-555-555','Standard');


// Greeting
Customer.prototype.greeting = function(){
  return "Hello there " + this.firstName + " " + this.lastName + " Welcome to my Company.";
} 



console.log(customer1);
console.log(customer1.greeting());