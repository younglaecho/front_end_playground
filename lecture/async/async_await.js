// function fetchUser() {
//   // do network request in 10secs...
//   return 'cho' 
// }

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network request in 10secs...
//     resolve('cho')
//   }) 
// }

async function fetchUser() {
  // do network request in 10secs...
  return('cho')
}

const user = fetchUser();
user.then(console.log)
console.log(user) // 만약에 이 부분이 사용자가 보는 ui를 update 하는 것이라면 화면을 띄우지 않게 됨


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
  await delay(1000);
  return('🍎')
}

async function getBanana() {
  await delay(1000);
  return('🍌')
}

// function getBanana() {
//   return delay(1000)
//   .then(() => console.log('🍌'))
// }

// function pickFruits() {
//   return getApple().then(apple =>{
//     return getBanana().then(banana=>`${apple} + ${banana}`)  
//   })
// }

// async function pickFruits() {
//   const apple = await getApple()
//   const banana = await getBanana()
//   return `${apple} + ${banana}`
// }


pickFruits().then(console.log)

// 에러처리
async function pickFruits() {
  try {
    const apple = await getApple()
    const banana = await getBanana()
    return `${apple} + ${banana}`
  } catch {
    console.log('에러가 발생했어요')
  }
}



//병렬처리


async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise
  const banana = await bananaPromise
  return `${apple} + ${banana}`
}