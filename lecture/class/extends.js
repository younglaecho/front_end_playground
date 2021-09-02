console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(tritangle instanceof Triangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object); // 모든 Object는 Object 라는 클래스의 인스턴스임(상속). 따라서 아래와 같은  Object의 메소드를 사용할 수 있는 것
console.log(triangle.toString());