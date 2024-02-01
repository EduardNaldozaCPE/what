const GRAVITY = 0.2;
const DRAGFACTOR = 0.009;
export default class PhysObject {
    constructor(ctx,x,y,mass,width,height){
        this.c          = ctx;
        this.position   = { x:x , y:y };
        this.velocity   = { x:0 , y:0 };
        this.accel      = { x:0 , y:GRAVITY };
        this.massGrams  = mass;
        this.width      = width;
        this.height     = height;
        this.nrgLoss    = { x:1 , y:1 };
    }

    physUpdate() {
        if (this.velocity.x != 0) this.velocity.x -= DRAGFACTOR*this.velocity.x
        this.velocity.x += this.accel.x;
        this.velocity.y += this.accel.y;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        
        // console.table({'accel':this.accel.x, 'vel':this.velocity.x});
    }

    addGravity(){
        this.accel.y = GRAVITY;
    }
    
    addForce(x, y) {
        this.accel.x = x;
        this.accel.y = y;
    }

    setVel(x,y){
        this.velocity.x = x;
        this.velocity.y = y;
    }
}