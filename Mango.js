class Mango {
    constructor(x,y,radius){
        var mango_options = {
            isStatic : true,
            friction : 1,
            restitution:0
        }
        this.mango  = Bodies.circle(x,y,radius,mango_options);
        this.radius = radius;
        this.image = loadImage("Sprites/mango.png")

        World.add(world,this.mango);

    }

    display(){
        
        
        
        //fill("lightBlue");
        imageMode(CENTER);
        image(this.image,this.mango.position.x,this.mango.position.y,this.radius,this.radius);
        
        

       

        
    }
}