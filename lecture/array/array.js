// 배열 선언
const arr1 = new Array();
const arr2 = [1, 2, 3];

// Index position
console.log(arr2);
console.log(arr2.length) // python : len(arr2)
console.log(arr2[0])
console.log(arr2[1])
console.log(arr2[arr2.length-1])

// looping

for (let i = 0; i<arr2.length; i++) {
  console.log(arr2[i])
}


for (element of arr2) {
  console.log(element)
}

console.clear()

arr2.forEach((element, index, array) => {
  console.log(element, index, array)
})


arr2.push(4) // 뒤에 들어감 python: append()
console.log(arr2)
arr2.pop()
console.log(arr2)

arr2.unshift(0)
console.log(arr2)
arr2.shift()
console.log(arr2)

// shift, unshift => 사용하지 않는게 좋음
// 시간이 오래걸림


arr2.push(4, 5);

console.log(arr2)


// searching
// arr2.push(1)
console.log(arr2.indexOf(1)); // 0
console.log(arr2)
console.log(arr2.lastIndexOf(1)); // 5
console.log(arr2.includes(1)); // true
console.log(arr2.includes(100)); // false


// concat 
const arr3 = arr2.concat([6, 7])
console.log(arr3)

console.log(arr2.toString())


// every

console.log(arr2.every(element => element >= 1))


// map
//arr2 = [1,2,3,4,5]
const arr4 = arr2.map(element=> {
  return element * 2
})
console.log(arr4)



// Homework : array의 메소드 some, reduce, filter 공부하고 정리하기


const test1 = [1, 2, 3, 4, 5]
// const test2 = Object.assign([], test1)

const test2 = []
for (let i = 0; i<test1.length; i++) {
  test2[i] =test1[i]
}

test2.push(1)
console.log(test2)
console.log(test1)

