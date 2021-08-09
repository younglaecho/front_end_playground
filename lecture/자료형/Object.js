const obj = {
  userName: "cho",
  age: 27,
  graduated: false,
  introduce: function () {
    console.log(`저는 ${this.age}살 ${this.userName}입니다.`);
  },
  graduate: function () {
    this.graduated = true;
  },
};

// 일급 함수 :함수가 값으로 쓰일 수 있음.
console.log(obj);
console.log(obj.userName);
obj.introduce();
obj.graduate();

console.log(obj);

function func(매개변수) {
  console.log(매개변수);
}

// func("asd");

// primive type => immutable
const a = 1;
a = 2;

// Object type(reference type) => mutable
const arr = [1, 2];
const b = arr;

b[1] = 0;

console.log(b);
console.log(arr);

// freeze(), assign();
