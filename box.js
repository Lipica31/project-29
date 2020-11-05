class Box  {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      
     polygon = Bodies.circle(50,200,20);
  
     World.add(world,polygon)
      
   
   
  slingshot = new SlingShot(this.polygon,{x:100,y:200});
    }
   
  };