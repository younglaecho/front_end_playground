"use strict";
// 변수를 선언하는 방법 let과 var,    const

// globalVar = 1
let globalVar = "abc";
{
  // let username = "User123"
  console.log(globalVar);
}

// console.log(username)

// if (true) {
//   let name = "cho"
// }

// for (let i = 0 ; i < 2 ; i++) {
//   let name = "cho"
// }

// console.log(name)

// var
// var hoisting
// 호이스팅이란 ? 어디에서 선언 되어있든지 간에 변수를 사용할 수 있도록 끌어올려주는 것
// => 문제점 선언하지 않은 변수를 사용하게 됨, 블럭 스코프를 무시함.

// const
// 값이 변경되지 않을 값을
// 보안성 : 해커들이 변수에 다른 값을 집어넣어 보안상의 문제를 일으키는 걸 막아 줄 수 있다.
// 실수 방지
