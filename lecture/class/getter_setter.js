class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age < 0 ? 0 : age;
  }

  // get age() {
  //   return this._age;
  // }

  // set age(value) {
  //   // if(value < 0) {
  //   //   throw Error('age can not be negative')
  //   // }
  //   this._age = value < 0 ? 0 : value;
  // }
}

const user1 = new User('Steve', 'Jobs', -20)
console.log(user1.age)