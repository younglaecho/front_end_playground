class Article {
  static publisher = 'Cho'
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(this.publisher)
  }
}


const article1 = new Article()
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher()


// 화요일, 목요일, 8시
// TIL(function, class)
// 다음 class의 상속, 나머지 등
// 배열의 메소드 조금
