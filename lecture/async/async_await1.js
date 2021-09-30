// async_await => 비동기 코드를 동기식으로 하는것처럼 작성하도록 도와줌.
// 내부적으로 Promise를 생성함.



// 1. async
// function fetchUser() {
//   return new Promise((resolve, rejcet) => {
//     // 시간이 걸리는 작업
//     resolve('?')
//   })
// }

async function fetchUser() {
  return '?'
}

const user = fetchUser();
user.then(console.log);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
  await delay(1000)
  return('🍎')
}

// async function getBanana() {
//   await delay(2000)
//   return('🍌')
// }

// function getBanana() {
//   return delay(2000)
//   .then(() => {
//     return '🍌'
//   })
// }

delay(2000)
  .then(() => {
    return '🍌'
  })
  .then(console.log)


// 다음주 화요일? 에 async_await 
// 몇시? 8시? 마라탕 화이팅 !