class Dustbin
{
    constructor(x,y,width,height)
   {

    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width=width;
    this.height=height;
    }
    display()
}