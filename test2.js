class Ship{
    constructor(name,latitude,longitude){
           this.name=name;
           this.latitude=latitude;
           this.longitude=longitude; 
           this.status=false;          
    }
    start(){
       console.log("Корабль отправился");
    }
    stop(){
        console.log("Корабль остановился");
    }
    move(){
        console.log("Корабль " + this.name + " имеет широту " + this.latitude + " и долготу " + this.longitude + " затем Корабль "+ this.name + " приплыл на широту 66° и долготу 77° ");
        
    }

};
var s=new Ship("Аврора","55°","44°","66°","77°");
s.start();
s.move();
s.stop();
