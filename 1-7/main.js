class Taiyaki {
   constructor(name){
    this.name =name;
   }what(){
       console.log('中身は' + this.name + 'です');
   }
}
let anko = new Taiyaki('あんこ');
anko.what();
let cream = new Taiyaki('クリーム');
cream.what();
let cheese = new Taiyaki('チーズ');
cheese.what();