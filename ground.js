class Ground{
    constructor(){
      var opt = {
       isStatic: true
      }
      this.body = Bodies.rectangle(width/2,435,width,25,opt);
      this.width = width;
      this.height = 25;

      World.add(world,this.body);
    }
    display(){
        //var pos = this.body.position;
        rectMode(CENTER);
        fill("gray");
        rect(width/2,435,width,25);
    }
}