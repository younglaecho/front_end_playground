// 생성자
class Shape {
  constructor (width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw () {
    console.log(`drawing ${this.color} color`);
  }
  getArea () {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  getArea () {
    return (this.width * this.height) / 2
  }
  draw () {
    super.draw()
    console.log('🔺')
  }
  toString () {
    return `Triangle : color ${this.color}`
  }
}

const rectangle = new Rectangle(20, 20, 'red')
rectangle.draw() // drawing red color
console.log(rectangle.getArea())

const triangle = new Triangle(20, 20, 'blue')
triangle.draw() // drawing red color
console.log(triangle.getArea())


// instanceof
console.log(rectangle instanceof Rectangle); // true  
console.log(triangle instanceof Rectangle);  // false
console.log(triangle instanceof Triangle);   // true
console.log(rectangle instanceof Shape);     // true
console.log(rectangle instanceof Object);    // 모든 Object는 Object 라는 클래스의 인스턴스임(상속). 따라서 아래와 같은  Object의 메소드를 사용할 수 있는 것
console.log(triangle.toString());


// 이제 하면됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
// 수업 뭐들음? 
// 일본어랑 
// 소프트웨어 융햡개론 ?????? =>
// 소프트웨어 융합 ?.? => 반드시 알아야 할 소프트웨어 지식 이거 좋은 거임!!!!
// 컴퓨터 구조 뭐이런거 이론적인거, 이게 전공자랑 비전공자의 차이 열심히 하면 좋을 듯..!
// 객체지향 프로그래밍 C++ 대박.. 천재될 듯
// 공부를 너무 안해서..! 
// todomate 해야함
// 해야함
// 밖에 나가야 함
// 다시할려구요

// 1. Object 생성
// Object : 자바스크립트의 자료형 중 하나로, key value 로 이루어져잇음.
const obj1 = {}
const obj2 = new Object()


const cho = {
  name: 'cho',
  age: 27
}

function print (person) {
  console.log(person.name)
  console.log(person.age)
}

print(cho)

// cho.hasJob = true;
// delete cho.hasJob
// console.log(cho)

console.log(cho.name); 
console.log(cho['name']); 

function printValue(obj, key) {
  console.log(obj[key])
}

printValue(cho, 'name')

// Property value shorthand
const person1 = {name: 'cho', age:27}
const person2 = {name: 'kim', age:21}
const person3 = {name: 'shin', age:28}
const person4 = {name: 'sadas', age:123}

function makePerson(name, age) {
  return {
    name, // name: name
    age   // age: age
  }
}
const person5 = makePerson('adas', 3)
console.log(person5)

// constructor function 
function Person(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  // return this
}


const person6 = new Person('asdd', 123) 
console.log(person6)
// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age
//   }
// }


// 쿨래스 : 붕어빵틀 
// 오브젝트 : 팥붕어빵, 피자붕어빵, 슈크림붕어빵, ㅇㅇ붕어빵 들

// for in, for of loop, 

for (key in cho) {
  console.log(key, ':', cho[key])
}

// for (value of iterable)  
const array = [1, 2, 3, 4, 5]

for (value of array) {
  console.log(value)
}


// 객체 복사
const user = {name: 'cho', age:'20'}
const user2 = user
// user2.name = 'kim'
// console.log(user)

// for in (old way)
const user3 ={}
for (key in user) {
  user3[key] = user[key] 
}
user3.name = 'kim'
console.log(user)

// Object.assign
const user4 = {}
Object.assign(user4, user)
console.log(user4)
user4.name = 'kim'
console.log(user)


// 목요일에 배열, TIL 작성좀 ㅎㅎ

// HTML, CSS,             
// form 
// css
// 2주 동안 css 끝내고 
// 자바스크립트 기본내용 끝내고
// DOM Event에 대해서 
// 2달 정도
// 상호작용 하는 요소가 
// game 만들기
// 테트리스 만들기