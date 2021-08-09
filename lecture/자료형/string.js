// 자바스크립트의 자료형
// primitive, Object

// primitive : number, string, null, undefined, symbol
// null : 의도적으로 들어가지 않은 값
// undefined : 변수를 선언했는데, 값이 할당하지 않은 것

let a;
console.log(a);

if (!undefined) {
  console.log("안녕하세요");
}

// number : 숫자, 자바스크립트에서는 정수형 x
console.log(1 + 1); //2
console.log(1 - 1); //0
console.log(4 / 3); //1.333
console.log(2 * 2); //4
console.log(4 % 3); //1
console.log(parseInt(4 / 3)); // 1
console.log(2 ** 3); //8

// string

const long_text =
  "asssdsfdsfccczkmmsafdfdsf\
mmnmnknkjndsfdsfsdf\
dsjkfjnakjfn\
ddsfdsfdsn";
console.log(long_text);

// 문자 접근
const apple = "apple";
console.log(apple[1]);
console.log(apple.charAt(1));

// 문자열 비교
console.log("a" < "b");
console.log("A" < "a");

// 문자열 메소드
console.log(apple.length); // 중요

const text = "Lorem ipsum dolor sit amet, consectetur sit adipiscing elit.";

// includes()
console.log(text.includes("sit"));

// startsWith(), endsWith()
console.log(text.startsWith("ipsum"));
console.log(text.endsWith("elit", 55));

// indexOf(), lastIndexOf()
console.log(text.indexOf("sit"));
console.log(text.lastIndexOf("sit"));

// replace()
console.log(text.replace("sit", "!!!"));

// replaceAll() 새기능
// console.log(text.replaceAll());

const text1 = "Lorem ipsum dolor sit amet, consectetur sit adipiscing elit.";
// slice(), substring()
console.log(text1.slice(5, 2));
console.log(text1.substring(5, 2));

// split()
const text2 = "010-5177-7229";
console.log(text2.split("-"));

// toLowerCase(), toUpperCase()
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

// trim()
const text3 = "         Hello          ";
console.log(text3);
console.log(text3.trim());
