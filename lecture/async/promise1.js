// state(상태) : pending(기능을 수행중인 상태) => fulfilled(기능이 완료된 상태) or rejected(기능이 실패된 상태)
// producer(정보 제공) vs consumer(정보 소비)

// 1.Producer
const promise = new Promise((resolve, reject) => {
  // 무거운 작업을 할때 예를 들면 네트워크에서 자료를 가져오거나, 파일을 읽는 것
  console.log('doing something');
  setTimeout(() => {
    resolve('결과') // resolve를 통해서 결과를 전달해줌
    // reject(new Error('error'))
  }, 2000)
})

// 2.Consumer(then, catch, finally)
promise
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log('완료되었습니다.')
  })

// 3. Promise Chaining 

const fetchNumber = new Promise((resolve, rejcet)=> {
  setTimeout(() => resolve(1), 1000); 
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve,reject)=> {
      setTimeout(() => resolve(num - 1), 2000)
    })
  })
  .then(num => console.log(num)) 


// 4. Promise Chaining Error Handling
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000)
  });


const getEgg = hen => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000)
    // setTimeout(() => reject(new Error(`Error! ${hen} => 🥚`)), 1000)
  })

const cook = egg => 
  new Promise((resolve, reject) => {
    setTimeout(()=> resolve(`${egg} => 🍳`), 1000)
  })

getHen()
  .then(hen => getEgg(hen))
  .catch(error => {
    return '🥖'
  }) 
  .then(egg => cook(egg))
  // then은 함수를 매개변수로 받는 함수인데, 매개변수에 해당하는 함수의 매개변수에 그전에 실행했던 resolve가 들어가는거에요
  .then(meal => console.log(meal))
  .catch(error => console.log(error))  