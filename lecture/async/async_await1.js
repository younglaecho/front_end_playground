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
  // throw (new Error('error'))
  return('🍎')
}

async function getBanana() {
  await delay(2000)
  return('🍌')
}

// function getBanana() {
//   return delay(2000)
//   .then(() => {
//     return '🍌'
//   })
// }

// delay(2000)
//   .then(() => {
//     return '🍌'
//   })
//   .then(console.log)

// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana=> `${apple}+${banana}`)
//   })
// }

// async function pickFruits() {
//   try {
//     const apple = await getApple();
//     const banana =  await getBanana();
//     return `${apple} + ${banana}`;
//   } catch {
//     console.log('에러가 발생했습니다.')
//   }
// }

pickFruits().then(console.log);

// 병렬처리
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}