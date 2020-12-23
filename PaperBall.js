class Paper{
constructor(x,y,Radius){
var option ={
    isStatic:false,
  restitution:0.3,
  friction:1.0,
   density:0.4
}
this.body=Bodies.circle(x,y,Radius,option);
this.Radius=Radius;
  World.add(world,this.body);
  this.image=loadImage("paper.png");
}
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push();
   translate(pos.x,pos.y);
   rotate(angle);
   // fill("blue");
   imageMode(CENTER);
   image(this.image,0,0,this.Radius);
    pop();
}

}