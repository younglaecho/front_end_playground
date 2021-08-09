// // ||(or), &&(and), !(not)

// const value1 = true;
// const value2 = true;

// // console.log(`or: ${value1 || value2}`);
// // console.log(`and: ${value1 && value2}`);

// console.log(`or: ${value1 || value2 || check()}`);
// // true 나오면 바로 끝
// console.log("______________________________________");

// console.log(`and: ${value1 && value2 && check()}`);
// // false 나오면 바로 끝

// function check() {
//   for (let i = 0; i < 10; i++) {
//     console.log("!!!!");
//   }
//   return true;
// }

// // nullableObject = {
//   something: "a",
// };

// nullableObject = null;

// nullableObject && nullableObject.something;

// if (nullableObject) {
//   nullableObject.something;
// }

// console.log(0 == "0");
// console.log(0 === "0");
// console.log(0 == "");
// console.log(0 === "");

const name = "1";
console.log("1" === name ? "맞았습니다." : "틀렸습니다.");

// quiz
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == false); // true
console.log(null === false); // false
