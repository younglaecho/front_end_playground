for (let i = 3; i > 0; i--) {
  console.log(i);
}

for (let i = 10; i > 0; i = i - 2) {
  console.log(i);
}

// quiz 30까지 1포함 2의 제곱수를 출력해보세요 1,2,4,8,16

// 이중 반복문
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log("i : ", i, "   j : ", j, "    mul : ", i * j);
//   }
// }

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log("i:", i, "j:", j, "mul:", i * j);
  }
}

// continue
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// break
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// 숙제 : for of에 대해서 알아오기! (mdn)
