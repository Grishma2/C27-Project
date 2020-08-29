class Roof {
    constructor(x,y){
        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 400, 20, options);

        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, 400, 20);
        fill("brown");
        pop();
    }
}