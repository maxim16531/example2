class Shop{
    constructor(name,city,goods){
        this.name=name;
        this.city=city;
        this.count=0;
        this.goods=goods;
    
    }
    info(){
        console.log("Это магазин "+ this.name + " в городе " + this.city + " В нём табуреток " + this.count + " В нём продаются " + this.goods);
    }
    incCount(){
        this.count++;
    }
    addCount(c){
        this.count+=c;
    }
    addGood(name){
       this.goods.push(name); 
    }
};
var s=new Shop("bookshop","Воронеж",["Лыжи","Коньки"]);
s.info();
s.name="fishshop";
s.info();
s.incCount();
s.info();
s.incCount();
s.info();
s.addCount(3);
s.addGood("Мячи");
s.info();
var box = ["Карандаш", "Ручка"];
console.log(box[0]);
box.unshift("Ластик");
console.log(box[0]);

