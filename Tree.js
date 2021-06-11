class Tree{
    constructor(x,y){
        this.x=x,
        this.y=y,
        this.dw=450,
        this.dh=600
        this.wallThickness=10
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dw,this.wallThickness,isStatic: true)
        this.rightWall=Bodies.rectangle(this.x,this.y,this.dw/2,this.dh/2,this.wallThickness,isStatic: true)
        World.add(world,this.bottomBody)
        World.add(world,this.leftWallBody)
        World.add(world,this.rightWallBody)
    }
    display(){
        var pos= this.bottomBody.position
        push();
        translate(pos.x,pos.y+10)
        fill(255);
        ImageMode(CENTER);
        Image(this.image,0,this.dw/2,this.dh/2)
        pop();
    }
    
}