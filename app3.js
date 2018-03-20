//Object.prototype
//Person.prototype


// Person constructor

function Person(firstName,lastName,dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.getAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Get Age

Person.prototype.getAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name

Person.prototype.getFullName = function(){
  return this.firstName + " " + this.lastName; 
}

// Get Married
Person.prototype.getMarried = function(newLastName){
this.lastName = newLastName;
}


const anuwat = new Person('Anuwat','AK' ,'12-04-95');

const mark = new Person('Mark','FB' ,'05-04-93');


const marry = new Person('Marry','Jackson','05-04-90');


console.log(mark);
console.log(mark.getAge());
console.log(mark.getFullName());

marry.getMarried('Morison');
console.log(marry.getFullName());
console.log(marry);
console.log(marry.hasOwnProperty('firstName'));
console.log(marry.hasOwnProperty('getFullName'));