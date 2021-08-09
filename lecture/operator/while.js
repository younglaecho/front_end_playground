let i = 3;
while (i > 0) {
  console.log(i);
  i -= 1;
  // i--
}

console.log("------------------------");
i = 3;

do {
  console.log(i);
  i -= 1;
  // i--
} while (i > 0);

while (true) {
  if (조건) {
    continue;
  }

  // ... ...

  if (조건1) {
    console.log("조건1 떄매 나감");
    break;
  }
  if (조건2) {
    console.log("조건2 떄매 나감");
    break;
  }
}

while (조건1 || 조건2) {}
