class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.25,
        'friction':1,
        'density':1.2
    }
    this.body = Bodies.rectangle(x, y,30,50, options);
    this.image = loadImage("unnamed.png");
    this.width = 30;
    this.height = 55;

    this.Visiblity = 255;

    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 5){
      var pos =this.body.position;
      var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
    imageMode(CENTER);
    strokeWeight(3);
    stroke("yellow");
    fill("lightyellow");
    image(this.image,0,0, this.width, this.height);
   pop();
     }
     else{
       push();
       this.Visiblity = this.Visiblity - 255;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 30, 50);
       World.remove(world, this.body);
       pop();
     }

     if(this.Visiblity <= 0 && this.Visiblity >= -1005){
     score++;
     }
  }
   
}