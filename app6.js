class Person {
  constructor(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting(){
    return "Hello there " + this.firstName + " " + this.lastName;
  }

  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);

  }
  getMarried(newLastName){
    return this.lastName = newLastName;
  }
  static addNumber(x,y){
    return x+y;
  }

}

const marry = new Person("Marry","Williams","12-04-1995");

console.log(marry);
marry.getMarried("Thompson");
console.log(marry.greeting());
console.log(marry.calculateAge());
console.log(Person.addNumber(20,5));