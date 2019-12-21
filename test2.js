class Ship{
    constructor(name,latitude,longitude){
           this.name=name;
           this.latitude=latitude;
           this.longitude=longitude; 
           this.status=false;          
    }
    start(){
        this.status=true;
       console.log("Корабль отправился");
    }
    stop(){
        this.status=false;
        console.log("Корабль остановился");
    }
    isInTheWay(){
        return status
    }
    move(latitude,longitude){    
        this.latitude=latitude;
        this.longitude=longitude;
        console.log("Корабль " + this.name + " имеет широту " + this.latitude + " и долготу " + this.longitude + " затем Корабль "+ this.name + " приплыл на широту 66 и долготу 77");  
    } 
};
var s=new Ship("Аврора", 66 ,77);
s.start();
s.move(55,44);
s.stop();


