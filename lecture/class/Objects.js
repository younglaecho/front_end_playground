// Object 는 관계되는 data와 기능을 묶어둔 자바스크립트의 자료형
// 대부분의 자바스크립트의 객체는 Object라는 것의 instance라고 할 수 있음
// key와 value로 이루어짐

// 1. Object 생성
const obj1 = {};
const obj2 = new Object();

// const name = 'cho'
// const age = 27 

// function print (name, age) {
//   console.log(name)
//   console.log(age)
// }

// print(name, age)

const cho = {
  name: 'cho',
  age: 27
}

function print (person) {
  console.log(person.name)
  console.log(person.age)
}

print(cho)


// 객체가 생성된 이후에도 properties를 생성하거나 삭제하는 것이 가능함
cho.hasJob = false
console.log(cho.hasJob)

delete cho.hasJob
console.log(cho.hasJob)


// Computed properties
// 우리가 어떤 key값을 가져올지 프로그램이 돌아가는 와중에(runtime 중에) 결정될 때 사용함
console.log(cho.name)
console.log(cho['name'])

function printValue(obj, key) {
  console.log(obj.key)
}
//위는 틀린 예

function printValue(obj, key) {
  console.log(obj[key])
}
printValue(cho, 'name');


// Property value shorthand
const person1 = {name: 'cho', age:27}
const person2 = {name: 'kim', age:21}
const person3 = {name: 'shin', age:28}






// function makePerson(name, age) {
//   return {
//     name: name,
//     age: age
//   }
// }
// function makePerson(name, age) {
//   return {
//     name,
//     age
//   }
// }

// construnctor Function
// class와 비슷한 아이
function Person(name, age) {
  // this = {}
  this.name = name
  this.age = age
  // return this
}
console.clear()

console.log(Person('cho', 21))
// console.clear()
//in Operator 
console.log('name' in cho)
console.log('age' in cho)
console.log('random' in cho)


// for in, for of loop

for (key in cho) {
  console.log(key)
}


const array = [1,2,3,4,5]
for (value of array) {
  console.log(value)
}





//Object cloning
const user = {name: 'cho', age:'20'}
const user2 = user
// user2.name='kim'
// console.log(user)
//old way (for in을 활용한 방법)
const user3 = {}
for (key in user) {
  user3[key] = user[key]
}
user3.name = 'kim'
console.log(user)
console.log(user3)

const user4 = {}
Object.assign(user4, user)
// const user4 = Object.assign({}, user)
console.log(user4)



const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size:'big' }
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color)
console.log(mixed.size)