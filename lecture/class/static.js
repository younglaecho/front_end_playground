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