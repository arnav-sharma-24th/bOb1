class Rope{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetY=offsetY;
        this.offsetX=offsetX;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:offsetX,y:offsetY}
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB = this.pointB
    }

   
    display(){
       

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
}