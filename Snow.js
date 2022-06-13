class Snow{
    constructor(x,y){
        var options={
            density:1,
            friction:0.5
        }
        this.snow=Bodies.rectangle(x,y,10,10,options);
        this.snowImage=loadImage("snow4.webp")
        World.add(world,this.snow)
    }
    display(){
        image(this.snowImage,this.snow.x,this.snow.y,50,50)
    }
}