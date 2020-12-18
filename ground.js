class Ground {
    constructor(){
        this.ground= Bodies.rectangle(200,380,400,10,{isStatic:true});
        this.width=400;
        this.height=10;
        World.add(world,this.ground)
    }

    display(){
        var pos=this.ground.position
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}