class Plinko {
    constructor (x,y){
      var options ={
          isStatic :true,
          'density' :0.3,
      }
       this.body = Bodies.circle(x,y,10,options);
       World.add(world,this.body);
    }
    display(){
      var pos1 = this.body.position;
      ellipseMode(RADIUS) 
        fill("white");
        ellipse(pos1.x,pos1.y,10)
    }
}






