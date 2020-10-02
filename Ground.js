class Ground {
    constructor(x,y,width,height){
        var Ground_options = {
            isStatic : true 
        }
        this.Ground  = Bodies.rectangle(x,y,width,height,Ground_options);
        this.width = width;
        this.height = height;

        World.add(world,this.Ground);

    }

    display(){
       
        rectMode(CENTER);
        rect(this.Ground.position.x,this.Ground.position.y,this.width,this.height);
       
    }
}