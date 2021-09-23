// 1. Producer
// 프로미스가 생성될때 executor라는 콜백함수가 자동으로 실행됨.
const promise = new Promise((resolve, reject)=> {
  // doing some heavy work (network, reading files)
  console.log('doing something...'); // executor 콜바로 실행되는 것을 확인할 수 있음.
  setTimeout(()=> {
    // resolve('결과'); // resolve로 결과를 전달
    reject(new Error('no network')) // reject를 통해 에러를 전달
  }, 2000);
});

// 2.Consumer: then, catch, finally
promise
  .then((value)=> { // resolve에서 전달해준 값이 매개변수로 들어감
    console.log(value); 
  })
  .catch(error => { // reject에서 전달해준 에러가 매개변수로 들어감
    console.log(error)
  })
  .finally(()=> { // promise가 성공하든 실패하든 실행됨.
    console.log('finally')
  })

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=> {
  setTimeout(() => resolve(1), 1000);
})

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject)=> {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Promise Chaining Error Handling
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000)
  });
const getEgg = hen => 
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000)
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000)
  })
const cook = egg => 
  new Promise((resolve, reject) => {
    setTimeout(()=> resolve(`${egg} => 🍳`), 1000)
  })

getHen()
  .then(getEgg) //.then(hen => getEgg(hen)) 전달하는 값을 갯수와 함수가 받는 매개변수의 갯수가 같으면 매개변수를 전달하는 것을 생략하여 적을 수 있음
  .catch(error => { // 바로 다음에 catch를 사용해서 단께별로 에러를 처리할 수 있음     
    return '🥖'
  })
  .then(cook) //.then(egg => cook(egg))
  .then(console.log) //.then(meal => console.log(meal))
  .catch(console.log)