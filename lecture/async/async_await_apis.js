function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
  await delay(1000);
  return('🍎')
}

async function getBanana() {
  await delay(2000);
  return('🍌')
}


function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits=> fruits.join(' + '))
}

pickAllFruits().then(console.log)


function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log)