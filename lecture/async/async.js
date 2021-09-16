// javscript 는 동기적임

console.log('1');
setTimeout(()=> {
  console.log('2')
}, 2000);
console.log('3');

// sync callback
function immediatePrint(print) {
  print()
}

immediatePrint(() => {
  console.log('sync test')
})

// async callback
function printWithDelay(print, timeout) {
  setTimeout(()=> {
    print()
  },timeout)
}

printWithDelay(()=> {
  console.log('async test')
})


function getData(callBack) {
  $.get('http://www.test.com', function(response){
    callBack(response)
  })
}

function callBack(data) {
  console.log(data)
}

getData(callBack)

// callback, promise, async await

