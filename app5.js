const personPrototype = {
  greeting: function(){
    return "Hello there " + this.firstName + " " + this.lastName;
  },
  getMarried: function(newLastName){
    return this.lastName = newLastName; 
  }
}

const marry = Object.create(personPrototype);
marry.firstName = "Marry";
marry.lastName = "Williams";
marry.age = 30;

console.log(marry);
marry.getMarried('Corner');
console.log(marry.greeting());

const brad = Object.create(personPrototype,{
  firstName: {value: "Brad"},
  lastName: {value: "Traversy"},
  age: {value: 35}
});

console.log(brad);
console.log(brad.greeting());