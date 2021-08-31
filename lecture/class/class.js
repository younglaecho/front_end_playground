class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // this.speak = function () {
    //   console.log(this.name)
    // }
  }

  speak() {
    console.log(`${this.name}: hello!`)
  } 
}

const cho = new Person('cho', 20);
console.log(cho.name)
console.log(cho.age)
cho.speak()

// const cho = {
//   name: 'cho',
//   age: 20,
//   speak: function() {
//     console.log(`${this.name}: hello!`)
//   }
// }

// class의 instance는 class의 정보를 가지고 있다.
// method를 불러올떄는 class로 접근하여 가져온다.
console.log(cho)