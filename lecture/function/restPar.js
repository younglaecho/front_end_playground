function printAll(...args) {
  console.log(args)
  console.log('----------------------------------')
  for (let i=0; i<args.length; i++) {
    console.log(args[i])
  }
  console.log('----------------------------------')
  // for (i of args) {
  //   console.log(i)
  // }

}

printAll(1,2,3,4,'apple', 'banana')


