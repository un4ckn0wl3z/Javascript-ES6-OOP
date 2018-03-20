// const brad = {
//   name: 'Brad',
//   age: 30
// }

// console.log(brad);
// console.log(brad.name);
// console.log(brad.age);


// Person constructor

function Person(name,dob){
  this.name = name;
  this.birthday = new Date(dob);
  this.getAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);

  }
}

// const anuwat = new Person('Anuwat');
// const Mark = new Person('Mark');

const anuwat = new Person('Anuwat','12-4-1995');
console.log(anuwat);
console.log(anuwat.getAge());
