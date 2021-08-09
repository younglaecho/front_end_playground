let number = -3;
if (number > 10) {
  console.log(`${number}는 10보다 크다.`);
} else if (number > 0) {
  console.log(`${number}는 0보다 크고 10보다 작다.`);
} else {
  console.log(`${number}는 0보다 작다.`);
}

// switch
const browser = "firefox";
switch (browser) {
  case "IE":
    console.log("브라우저가 IE입니다.");
    break;
  case "firefox":
  case "chrome":
    console.log("브라우저가 firefox 이거나 chrome입니다.");
    break;
}
