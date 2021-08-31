class Test {
  publicField = 2;
  #privateField = 0;
};

const test = new Test();
console.log(test.publicField);
console.log(test.privateField);