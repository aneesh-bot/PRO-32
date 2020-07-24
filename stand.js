class Stand{
    constructor(x,y, width){
      var opt = {
      isStatic: true
      }

      this.body = Bodies.rectangle(x,y,width,15,opt);
      this.width = width;
      this.height =15;
     

      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}