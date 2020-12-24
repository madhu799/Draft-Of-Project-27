class Rope{
    constructor(body1, body2, offsetX, offsteY){
        this.offsetX=offsetX
        this.offsteY=offsteY
        var options={
            bodyA: body1,
            bodyB: body2,
           pointB:{x:this.offsetX, y:this.offsteY}
        }
    
        this.rope=Matter.Constraint.create(options)
     

        World.add(world,this.rope)


}
}