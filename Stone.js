class Stone {
    constructor(x,y,radius){
        var options = {
            restitution:0,
            friction:1,
            density:1.3
        }
        this.stone = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("Sprites/stone.png")

        World.add(world,this.stone);

    }

    display(){
       
        
        imageMode(CENTER);
        image(this.image,this.stone.position.x,this.stone.position.y,this.radius,this.radius);
       
    }
}