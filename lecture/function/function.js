// 자바스크립트에서 함수를 정의 하는 법

function 이름(매개변수1, 매개변수2) {
  // 함수의 로직
  return 결과
}

// 매개변수 : input, 결과 : output

// 1. 함수의 이름을 지을떄는 동사형
// ex) doSomething, CreatUser

// 2. 하나의 함수가 하는 기능은 하나여야 함
// ex) CreateCardAndCreateMembership

// 3. 함수는 Object이다(자바스크립트에서)
// primitivem, object
// 값이 될수도 있고, 매개변수로, 함수의 결과로


function printHello () {
  console.log('Hello');
}

printHello()

function log(message) {
  console.log(message)
}

log('Hello!!')

// 자바스크립트의 매개변수로 Object가 들어갈때
function changeName(obj) {
  obj2 = Object.assign(obj)
  obj2.name ='coder';
  return obj2;
}

const cho = {name:'cho'}
coder = changeName(cho)
console.log(coder) // {name: 'coder'}
console.log(cho) // {name: 'cho'}



function showMessage(message, from='unknown') {
  console.log(`${from}으로부터 온 메세지 : ${message}`)
}


showMessage('안녕하세요')



// Rest parameters

function printAll (...args) {
  console.log(args)
  for(let i=0; i<args.length;i++) {
    console.log(args[i])
  }

  console.log('-------------------------------------')

  for(i of args) {
    console.log(i)
  }

  console.log('-------------------------------------')
  // args.forEach(arg => console.log(arg))
  args.forEach(function(arg) {
    console.log(arg)
  })
}

printAll('banana', 'apple', 'water')


// Scope => 밖에서는 안을 볼 수 없고, 안에서는 밖을 볼수 있다.
let globalVar = 'global';
function scope1 (){
  let localVar = 'local';
  console.log(globalVar)
  console.log(localVar)
}
scope1()
console.log(globalVar)
// console.log(localVar)


console.log('---------------------------------------')
// 함수 선언과 함수 표현

// 함수 선언 => hoisting o
function 함수명 () {

}

// 함수 표현 => hoisting x
const printHello1 = function () { // 함수표현식 : 익명 함수 변수에 할당하는 형태
  console.log('Hello')
}


const printHello2 = function print() { 
  console.log('Hello')
}

printHello2()


// hoisting 맨 위로 끌어올려진다는 뜻임.
// console.log(value)
// var value



// Callback 
function randomQuiz(answer, func1, func2) {
  if (answer==='!!!') {
    func1()
  } else {
    func2()
  }
}

const printYes = function() {
  console.log('Yes')
}

const printNo = function() {
  console.log('No')
}

randomQuiz('!!!', printYes, printNo)



// Arrow Funtion(화살표 함수)

const ArrowFunc = () => {
  console.log('Hello')
}

ArrowFunc()

const ArrowEx = (a, b) => a + b
const ArrowEx = (a, b) => {
  return a + b
}

console.log(ArrowEx(1,2))


// 숙제 : add, 빼기, mul, div
// TIL(Today I Learn)

